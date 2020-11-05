/* global document */

export default class Game {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
    this.timer = document.querySelector('.timer');
    this.counter = document.querySelector('.counter');
    this.default = 0;
  }

  checkPosition(item) {
    return Array.from(this.gameBoard.children).indexOf(item);
  }

  checkNeighbor(emptyChip) {
    const positionOfEmptyChip = this.checkPosition(emptyChip);
    return [positionOfEmptyChip - this.boardSize, positionOfEmptyChip - 1,
      positionOfEmptyChip + 1, positionOfEmptyChip + this.boardSize];
  }

  isNeifhbor(targetElem, emptyChip) {
    const positionOftargtElem = this.checkPosition(targetElem);
    return this.checkNeighbor(emptyChip).indexOf(positionOftargtElem) !== -1;
  }

  isFinish() {
    const arrChips = Array.from(this.gameBoard.children);
    for (let i = this.default; i < arrChips.length - 2; i += 1) {
      arrChips[i] = (+arrChips[i].dataset.id === i + 1);
    }
    if (arrChips.indexOf(false) === -1) {
      console.log('congratulation');
    } else console.log('fail');
  }

  changeChip(target, empty) {
    const targetElem = target;
    const emptyChip = empty;

    if (this.isNeifhbor(targetElem, emptyChip)) {
      emptyChip.className = 'chip';
      emptyChip.dataset.id = targetElem.dataset.id;
      emptyChip.textContent = targetElem.textContent;
      targetElem.dataset.id = this.default;
      targetElem.textContent = '';
      targetElem.className = 'empty';

      this.moves += 1;
      this.updateMoves();
      this.isFinish();
    }
  }

  addZero(number) {
    this.number = (number < 10) ? `0${number}` : number;
    return this.number;
  }

  checkMinutes() {
    if (this.seconds === 60) {
      this.seconds = this.default;
      this.minutes += 1;
    }
  }

  updateTimer() {
    this.timer.textContent = `${this.addZero(this.minutes)} : ${this.addZero(this.seconds)}`;
  }

  updateMoves() {
    this.counter.textContent = this.moves;
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.seconds += 1;
      this.checkMinutes();
      this.updateTimer();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  initDefaultParam(boardSize) {
    this.minutes = this.default;
    this.seconds = this.default;
    this.moves = this.default;
    this.boardSize = +boardSize;
  }

  generateBoard() {
    this.gameBoard.style.gridTemplateColumns = `repeat(${this.boardSize}, 1fr)`;
    let div = null;
    for (let i = this.default; i < this.boardSize * this.boardSize; i += 1) {
      div = document.createElement('div');
      div.className = 'chip';
      div.setAttribute('data-id', i);
      div.textContent = i;
      this.gameBoard.prepend(div);
    }
    const empty = document.querySelector('[data-id="0"]');
    empty.className = 'empty';
    empty.textContent = '';
  }

  clearBoard() {
    let i = 0;
    while (this.gameBoard.children[0].className !== 'overlay') {
      this.gameBoard.removeChild(document.querySelector(`[data-id="${i}"]`));
      i += 1;
    }
  }
}

(() => {
  const gameBoard = document.querySelector('.game-board');
  const btnsPause = document.querySelectorAll('.pause');
  const btnStart = document.querySelector('.start');
  const selectBox = document.querySelector('.select-box');

  let game = new Game();
  game.initDefaultParam(selectBox.options[selectBox.options.selectedIndex].value);
  game.generateBoard();

  btnStart.addEventListener('click', () => {
    game = new Game();
    game.initDefaultParam(selectBox.options[selectBox.options.selectedIndex].value);
    game.clearBoard();
    game.generateBoard();
    game.updateTimer();
    game.updateMoves();
    game.startTimer();
  });

  gameBoard.addEventListener('click', (e) => {
    if (e.target.className === 'chip') {
      const emptyChip = document.querySelector('.empty');
      game.changeChip(e.target, emptyChip);
    }
  });

  btnsPause[0].addEventListener('click', () => {
    game.stopTimer();
  });

  btnsPause[1].addEventListener('click', () => {
    game.startTimer();
  });
})();
