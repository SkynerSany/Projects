class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.readyToReset = false;
      this.clear();
    }
  
    clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    cropNumber(number) {
      number = number.replace(/0+$/, '');
      number = number.replace(/\.+$/, '');
      return number;
    }

    isNegativeNumber(operation) {
      if (this.currentOperand === '' && operation === '-') return true;
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '' || (this.currentOperand === '-' && operation === '-')) return;
      if (this.previousOperand !== '') {
        this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
      if (operation === '√') {
        this.compute();
      }
    }
  
    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      let maxLength = Math.max(('' + prev).length, ('' + current).length);
      if (this.operation !== '√' && (isNaN(prev) || isNaN(current))) return;
      switch (this.operation) {
        case '+':
          computation = this.cropNumber((prev + current).toFixed(maxLength));
          break
        case '-':
          computation = this.cropNumber((prev - current).toFixed(maxLength));
          break
        case '*':
          computation = this.cropNumber((prev * current).toFixed(maxLength));
          break
        case '÷':
          computation = this.cropNumber((prev / current).toFixed(maxLength + 1));
          break
        case 'xn':
          computation = Math.pow(prev, current);
          break
        case '√':
          computation = (prev > 0) ? Math.sqrt(prev) : "Введены неверные данные";
          break
        default:
          return;
      }
      this.readyToReset = true;
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        this.isDecimalDigits = true;
        return `${integerDisplay}.${decimalDigits}`
      } else {
        this.isDecimalDigits = false;
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText = (this.currentOperand === '-' 
        || this.currentOperand === "Введены неверные данные") ? 
            this.currentOperand : this.getDisplayNumber(this.currentOperand); 
      if (this.operation != null && this.operation !== 'xn' && this.operation !== '√') {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else if(this.operation === 'xn'){
        this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ^`
      } else if(this.operation === '√'){
        this.previousOperandTextElement.innerText =
            `${this.operation} ${this.getDisplayNumber(this.previousOperand)}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]');
  const operationButtons = document.querySelectorAll('[data-operation]');
  const equalsButton = document.querySelector('[data-equals]');
  const deleteButton = document.querySelector('[data-delete]');
  const allClearButton = document.querySelector('[data-all-clear]');
  const previousOperandTextElement = document.querySelector('[data-previous-operand]');
  const currentOperandTextElement = document.querySelector('[data-current-operand]');
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener("click", () => {
  
        if(calculator.previousOperand === "" &&
        calculator.currentOperand !== "" &&
        calculator.readyToReset) {
            calculator.currentOperand = "";
            calculator.readyToReset = false;
        }
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.isNegativeNumber(button.innerText) ? calculator.appendNumber(button.innerText)
        : calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
  })