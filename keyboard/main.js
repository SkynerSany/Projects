const body = document.querySelector('.body');    
const textarea = document.createElement('textarea');
const ruMas = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 
                'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 
                'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];
const ruSupMas = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
const ruAttrMas = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 
                'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 
                'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'AltGraph', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const engMas = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 
                'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 
                'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];
const engSupMas = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const engAttrMas = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 
                    'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 
                    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'AltGraph', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const optionKey = [{'13': 'button btn-option button-backspace'}, 
                    {'0': 'button btn-option button-tab', 
                        '14': 'button btn-option del'},
                    {'0': 'button btn-option caps', 
                        '12': 'button btn-option enter'}, 
                    {'0': 'button btn-option shift left-shift',
                        '11': 'button btn-option up',
                        '12': 'button btn-option shift right-shift'}, 
                    {'0': 'button btn-option ctrl',
                        '1': 'button btn-option win',
                        '2': 'button btn-option alt',
                        '3': 'button btn-option space',
                        '4': 'button btn-option alt',
                        '5': 'button btn-option ctrl',
                        '6': 'button btn-option arrow',
                        '7': 'button btn-option arrow',
                        '8': 'button btn-option arrow'}];
const languages = {'en': 'en',
                    'ru': 'ru'};
const lengthLine = [14, 15, 13, 13, 9];
let keyboard;
let div;
let span;
let sup;
let switcher;
let mas = [];
let rowMas = [];

if (sessionStorage.switcher) {
    switcher = sessionStorage.switcher;
} else switcher = languages.ru;

function domLoad() {
    keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    textarea.className = 'textarea';


    for (let i = 0; i < 5; i++) {
        div = document.createElement('div');
        div.className = 'row';
        keyboard.appendChild(div);
        rowMas.push(div);
        open(i, rowMas);
    }

    body.appendChild(textarea);
    body.appendChild(keyboard);

    if (switcher === languages.ru) {
        ruLang();
        mas = [];
    } else if (switcher === languages.en) {
        engLang();
        mas = [];
    }

    event();          
}

function open (k, row) {
    let optionalText = 'optional-text';
    let n = lengthLine[k];
    
    for (let i = 0; i < n; i++) {

        span = document.createElement('span');
        sup = document.createElement('sup');
        div = document.createElement('div');

        if (Object.keys(optionKey[k]).indexOf(`${i}`) !== -1) {
            div.className = optionKey[k][i];
            span.className = optionalText;
        } else {
            div.className = 'button button-text';
            span.className = 'text';
            sup.className = 'top';
        }

        div.appendChild(sup);
        div.appendChild(span);
        row[k].appendChild(div);
        keyboard.appendChild(row[k]);
    }
}

function ruLang () {
    let spanText = document.querySelectorAll('span');
    let supText = document.querySelectorAll('sup');
    let button = document.querySelectorAll('.button');

    spanText.forEach((element, i) => {
        element.textContent = ruMas[i];
    });

    ruSupMas.forEach((elem, i)=> {
        supText[i + 1].textContent = elem;
    });

    ruAttrMas.forEach((el, i) => {
        button[i].setAttribute('data-name', el);
    });

    switcher = languages.ru;

}

function engLang () {

    let spanText = document.querySelectorAll('span');
    let supText = document.querySelectorAll('sup');
    let button = document.querySelectorAll('.button');

    spanText.forEach((element, i) => {
        element.textContent = engMas[i];
    });

    engSupMas.forEach((elem, i)=> {
        supText[i + 1].textContent = elem;
    });

    engAttrMas.forEach((el, i) => {
        button[i].setAttribute('data-name', el);
    });

    switcher = languages.en;

}

function event() {
    const keyboard = document.querySelector('.keyboard');
    const buttonShift = document.querySelector('.shift');
    const buttonCaps = document.querySelector('.caps');
    let buttonText = document.querySelectorAll('.button-text');
    let checker = false;
    const events = {
        ' ': () => textarea.value += ' ',
        'Backspace': () => textarea.value = textarea.value.slice(0, textarea.textLength - 1),
        'CapsLock': () => clickCaps(),
        'Enter': () => textarea.value += '\n',
        'Tab': () => textarea.value += '   '
    };

    function textToUpperCase() {
        buttonText.forEach((elem, i, arr) => {
            arr[i].children[1].textContent = elem.children[1].textContent.toUpperCase();
            arr[i].setAttribute('data-name', buttonText[i].getAttribute('data-name').toUpperCase());
        });
    }

    function textToLowerCase() {
        buttonText.forEach((elem, i, arr) => {
            arr[i].children[1].textContent = elem.children[1].textContent.toLowerCase();
            arr[i].setAttribute('data-name', buttonText[i].getAttribute('data-name').toLowerCase());
        });
    }

    function clickCaps() {
        if (!checker) {
            textToUpperCase();
            buttonCaps.className = `${buttonCaps.className} active`;
            checker = true;
        } else {
            textToLowerCase();
            buttonCaps.className = buttonCaps.className.replace(/ active/gu, '');
            checker = false;
        }
    }

    buttonShift.addEventListener('mousedown', () => { 
        textToUpperCase();
    });

    buttonShift.addEventListener('mouseup', () => { 
        textToLowerCase();
    });

    keyboard.addEventListener('click', (event) => {
        let name = '';

        if (event.target.tagName === 'SUP' || event.target.tagName === 'SPAN') {
            name = event.target.parentNode.dataset.name;
        } else if(event.target.className.indexOf('button') != -1) {
            name = event.target.dataset.name;
        }

        if (name.length === 1) {
            textarea.value += name;
        } else if (typeof (events[name]) === 'function'){
            events[name]();
        } else if (name !== 'Shift') {
            events[name];
        }
    });

    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        const name = event.key;
        const dataName = document.querySelectorAll(`[data-name = '${name}']`);
        if (name === 'Shift') {
            textToUpperCase();
        } 
        
        if (name !== 'CapsLock') dataName.forEach(el => el.className = `${el.className} active`);

        if (name.length === 1 && dataName.length) {
            textarea.value += name;
        } else if (typeof (events[name]) === 'function'){
            events[name]();
        } else if (name !== 'Shift') {
            events[name];
        }
    });

    document.addEventListener('keyup', (event) => {
        let name = event.key;

        if (name === 'Shift') {
            textToLowerCase();
            mas[0] = name;
            switchLang();
        } else if(name === 'Alt') {
            mas[1] = name;
            switchLang();
        }

        if (name !== 'CapsLock') document.querySelectorAll(`[data-name = '${name}']`).forEach(el => el.className = el.className.replace(/ active/gu, ''));
    });

    function switchLang() {
        if (mas[0] == 'Shift' && mas[1] == 'Alt') {
            if (switcher === languages.en) {
                ruLang();
                mas = [];
            }else if (switcher === languages.ru) {
                engLang();
                mas = [];
            }
        }
    }
}

domLoad();

window.onunload = () => sessionStorage.switcher = switcher;
