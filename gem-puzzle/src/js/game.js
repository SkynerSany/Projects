/* global document, Audio */

export default class Game {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
    this.timer = document.querySelector('.timer');
    this.counter = document.querySelector('.counter');
    this.audioTags = document.querySelectorAll('.audio');
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
    for (let i = this.default; i < arrChips.length - 3; i += 1) {
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
      this.emptyChipStyle = emptyChip.style.backgroundPosition;
      emptyChip.className = (!this.type) ? 'chip' : 'chip image';
      emptyChip.dataset.id = targetElem.dataset.id;
      emptyChip.textContent = targetElem.textContent;
      emptyChip.style.backgroundPosition = targetElem.style.backgroundPosition;

      targetElem.dataset.id = this.default;
      targetElem.textContent = '';
      targetElem.className = 'empty';
      targetElem.style = this.emptyChipStyle;

      if (this.audioNumber) {
        this.audio.currentTime = this.default;
        this.audio.play();
      }

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

  generateRandomNumbres() {
    this.sortArr = [];
    for (let i = this.default; i < this.boardSize * this.boardSize; i += 1) {
      this.sortArr[i] = i;
    }
    return this.sortArr.sort(() => 0.5 - Math.random());
  }

  generateArrImgPos() {
    this.arrImagPositions = [];
    for (let i = this.default; i < this.boardSize; i += 1) {
      for (let j = this.default; j < this.boardSize; j += 1) {
        this.arrImagPositions.push(`${99 * (j / (this.boardSize - 1))}% ${99 * (i / (this.boardSize - 1))}%`);
      }
    }
  }

  switchBgStyle() {
    const style = document.querySelector('.img-style');
    style.textContent = `.image {background-image: ${this.imgSrc};}`;
    if (this.type === 2) {
      style.textContent = `.image {background-image: ${this.imgSrc}; color: #ffffff; text-shadow: 2px 2px 5px #000;}`;
    }
  }

  generateBoard() {
    this.gameBoard.style.gridTemplateColumns = `repeat(${this.boardSize}, 1fr)`;
    let div = null;

    this.sortArr = this.generateRandomNumbres();
    this.generateArrImgPos();
    this.switchBgStyle();

    for (let i = this.default; i < this.boardSize * this.boardSize; i += 1) {
      div = document.createElement('div');

      if (!this.type) {
        div.className = 'chip';
        div.textContent = this.sortArr[i];
      } else {
        div.className = 'chip image';
        div.style.backgroundPosition = this.arrImagPositions[this.sortArr[i] - 1];
        if (this.type === 2) {
          div.textContent = this.sortArr[i];
        }
      }

      div.setAttribute('data-id', this.sortArr[i]);
      this.gameBoard.prepend(div);
    }
    const empty = document.querySelector('[data-id="0"]');
    empty.className = 'empty';
    empty.textContent = '';
  }

  clearBoard() {
    let i = this.default;
    while (this.gameBoard.children[this.default].className !== 'overlay') {
      this.gameBoard.removeChild(document.querySelector(`[data-id="${i}"]`));
      i += 1;
    }
  }

  select(selectBox) {
    this.selectBox = selectBox;
    return this.selectBox.options[this.selectBox.options.selectedIndex].value;
  }

  initDefaultParam(boardSize, audioNumber, type) {
    this.type = type;
    this.minutes = this.default;
    this.seconds = this.default;
    this.moves = this.default;
    this.boardSize = +boardSize;
    this.audioNumber = +audioNumber;
    this.audio = new Audio((this.audioNumber) ? `src/assets/audio/${[this.audioNumber]}.mp3` : '');
    this.imgSrc = `url("src/assets/box/${Math.floor(Math.random() * (150 - 1) + 1)}.jpg")`;
  }
}

(() => {
  const gameBoard = document.querySelector('.game-board');
  const btnsPause = document.querySelectorAll('.pause');
  const btnStart = document.querySelector('.start');
  const selectBox = document.querySelector('.select-box');
  const selectAudio = document.querySelector('.select-audio');
  const selectIcons = document.querySelector('.select-icon-type');

  let game = new Game();
  game.initDefaultParam(game.select(selectBox), game.select(selectAudio),
    +game.select(selectIcons));
  game.generateBoard();

  btnStart.addEventListener('click', () => {
    game = new Game();
    game.initDefaultParam(game.select(selectBox), game.select(selectAudio),
      +game.select(selectIcons));
    game.clearBoard();
    game.generateBoard();
    game.updateTimer();
    game.updateMoves();
    game.startTimer();
  });

  gameBoard.addEventListener('click', (e) => {
    if (Array.from(e.target.classList).includes('chip')) {
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
