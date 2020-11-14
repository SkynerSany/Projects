/* global document, Audio, window */

import Dom from './dom';

export default class Game {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
    this.timer = document.querySelector('.timer');
    this.counter = document.querySelector('.counter');
    this.audioTags = document.querySelectorAll('.audio');
    this.btnsPause = document.querySelectorAll('.pause');
    this.selectBox = document.querySelector('.select-box');
    this.selectAudio = document.querySelector('.select-audio');
    this.selectIcons = document.querySelector('.select-icon-type');
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

  checkLastElem(emptyChip, emptyNeighboard, positionOftargtElem) {
    const positionOfEmptyChip = this.checkPosition(emptyChip);
    this.bool = true;
    if (!(positionOfEmptyChip % this.boardSize)) {
      this.bool = emptyNeighboard[1] !== positionOftargtElem;
    } else if (!((positionOfEmptyChip + 1) % this.boardSize)) {
      this.bool = emptyNeighboard[2] !== positionOftargtElem;
    }
    return this.bool;
  }

  isNeifhbor(targetElem, emptyChip) {
    const positionOftargtElem = this.checkPosition(targetElem);
    const emptyNeighboard = this.checkNeighbor(emptyChip);
    return emptyNeighboard.indexOf(positionOftargtElem) !== -1
      && this.checkLastElem(emptyChip, emptyNeighboard, positionOftargtElem);
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
    const strDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    this.dom.openWinLayer(this.type);
    this.dom.generateFinishMessage(this.moves, this.minutes, this.seconds, this.boardSize);
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

  checkMinutes() {
    if (this.seconds === 60) {
      this.seconds = this.default;
      this.minutes += 1;
    }
  }

  updateTimer(minutes = this.minutes, seconds = this.seconds) {
    this.time = `${this.dom.addZero(minutes)} : ${this.dom.addZero(seconds)}`;
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
    this.chipArea = this.gameBoard.children[0].offsetWidth / 6;

    this.updateTimer();
    this.updateMoves();
  }

  select(selectBox) {
    this.box = selectBox;
    return this.box.options[this.box.options.selectedIndex].value;
  }

  selectArr() {
    return [this.select(this.selectBox), this.select(this.selectAudio),
      +this.select(this.selectIcons)];
  }

  getChipPosition(chip) {
    this.positionTarget = chip.getBoundingClientRect();
    return [this.positionTarget.x, this.positionTarget.y];
  }

  elementIsIdentical(a, b) {
    return a + this.chipArea > b && a - this.chipArea < b;
  }

  checkDragPosition(e) {
    const emptyChip = document.querySelector('[data-id="0"]');
    const chip = document.querySelector(`[data-id="${e.target.dataset.id}"]`);
    const positionTarget = this.getChipPosition(e.target);
    const positionEmpty = this.getChipPosition(emptyChip);
    const positionChip = this.getChipPosition(chip);
    if ((this.elementIsIdentical(positionTarget[0], positionEmpty[0])
      && this.elementIsIdentical(positionTarget[1], positionEmpty[1]))
      || (this.elementIsIdentical(positionTarget[0], positionChip[0])
      && this.elementIsIdentical(positionTarget[1], positionChip[1]))) {
      const target = this.dom.removeDragBox(this.type);
      this.changeChip(target, emptyChip);
    } else {
      this.dom.removeDragBox(this.type);
    }
  }

  loadGame(count = 0) {
    const gameSettings = JSON.parse(window.localStorage.saves)[count];

    this.selectAudio.options[gameSettings.audio].selected = true;
    this.selectBox.options[`${gameSettings.size - 3}`].selected = true;
    this.selectIcons.options[`${gameSettings.type}`].selected = true;

    this.startGame(gameSettings.size,
      gameSettings.audio, +gameSettings.type, gameSettings.minutes,
      gameSettings.seconds, gameSettings.moves, gameSettings.randomNumbers, gameSettings.imgSrc);
  }

  startGame(boardSize, audioNumber, type, minutes,
    seconds, moves, rundomNumbers, imgSrc) {
    this.dom.switchVisibleBtn(1, 0);
    this.dom.changeVisibleSettings(false);

    this.game = new Game();
    this.initDefaultParam(boardSize, audioNumber, type, minutes,
      seconds, moves);
    this.dom.clearBoard();
    this.generateBoard(rundomNumbers, imgSrc);
    this.startTimer();
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
}
