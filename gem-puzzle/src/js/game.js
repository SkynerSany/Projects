/* global document, Audio, window */

import Dom from './dom';

export default class Game {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
    this.timer = document.querySelector('.timer');
    this.counter = document.querySelector('.counter');
    this.audioTags = document.querySelectorAll('.audio');
    this.btnsPause = document.querySelectorAll('.pause');
    this.dom = new Dom();
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
      this.finish();
    }
  }

  finish() {
    this.stopTimer();
    const date = new Date();
    const strDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
    this.dom.openWinLayer(this.type);
    new Audio('src/assets/audio/congratulations.mp3').play();
    this.dom.updateBestScore(strDate, this.moves, `${this.boardSize}x${this.boardSize}`, this.time);
  }

  changeChip(target, empty) {
    if (this.isNeifhbor(target, empty)) {
      this.dom.switchClassChips(target, empty, this.type);

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

  updateTimer(minutes = this.minutes, seconds = this.seconds) {
    this.time = `${this.addZero(minutes)} : ${this.addZero(seconds)}`;
    this.timer.textContent = this.time;
  }

  updateMoves(moves = this.moves) {
    this.counter.textContent = moves;
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

  generateBoard(sortArr = this.generateRandomNumbres(), imgSrc = this.imgSrc) {
    this.dom.generateTable(this.boardSize);
    this.generateArrImgPos();
    this.dom.switchBgStyle(this.type, imgSrc);
    this.dom.generateChips(this.boardSize, this.type, sortArr, this.arrImagPositions);

    this.updateTimer();
    this.updateMoves();
  }

  select(selectBox) {
    return selectBox.options[selectBox.options.selectedIndex].value;
  }

  selectArr() {
    const selectBox = document.querySelector('.select-box');
    const selectAudio = document.querySelector('.select-audio');
    const selectIcons = document.querySelector('.select-icon-type');

    return [this.select(selectBox), this.select(selectAudio),
      +this.select(selectIcons)];
  }

  startGame(boardSize, audioNumber, type, minutes,
    seconds, moves, rundomNumbers, imgSrc) {
    this.generateEvents();
    this.dom.switchVisibleBtn(1, 0);
    this.dom.changeVisibleSettings(false);

    this.game = new Game();
    this.initDefaultParam(boardSize, audioNumber, type, minutes,
      seconds, moves);
    this.dom.clearBoard();
    this.generateBoard(rundomNumbers, imgSrc);
    this.startTimer();

    this.btnsPause[0].addEventListener('click', () => {
      this.stopTimer();
    });

    this.btnsPause[1].addEventListener('click', () => {
      this.startTimer();
    });
  }

  initDefaultParam(boardSize, audioNumber, type, minutes = this.default,
    seconds = this.default, moves = this.default) {
    this.type = type;
    this.minutes = minutes;
    this.seconds = seconds;
    this.moves = moves;
    this.boardSize = +boardSize;
    this.audioNumber = +audioNumber;
    this.audio = new Audio((this.audioNumber) ? `src/assets/audio/${[this.audioNumber]}.mp3` : '');
    this.imgSrc = `url("src/assets/box/${Math.floor(Math.random() * (150 - 1) + 1)}.jpg")`;
  }

  generateEvents() {
    this.btnStart = document.querySelector('.start');
    this.selectBox = document.querySelector('.select-box');
    this.selectAudio = document.querySelector('.select-audio');
    this.selectIcons = document.querySelector('.select-icon-type');
    this.saveBtn = document.querySelector('.save-btn');

    this.btnStart.addEventListener('click', () => {
      this.startGame(this.select(this.selectBox),
        this.select(this.selectAudio), +this.select(this.selectIcons));
    });

    this.gameBoard.addEventListener('click', (e) => {
      if (Array.from(e.target.classList).includes('chip')) {
        const emptyChip = document.querySelector('.empty');
        this.changeChip(e.target, emptyChip);
      }
    });
  }
}

(() => {
  const game = new Game();

  game.generateEvents();

  window.onload = () => {
    game.initDefaultParam(...game.selectArr());
    game.generateBoard();
  };
})();
