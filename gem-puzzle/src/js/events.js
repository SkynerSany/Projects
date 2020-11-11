/* global document, window */

import Dom from './dom';
import Game from './game';
import Save from './save';

export default class Events {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
    this.btnsPause = document.querySelectorAll('.pause');
    this.overlay = document.querySelector('.overlay');
    this.btnStart = document.querySelector('.start');
    this.selectBox = document.querySelector('.select-box');
    this.selectAudio = document.querySelector('.select-audio');
    this.selectIcons = document.querySelector('.select-icon-type');
    this.saveBtn = document.querySelector('.save-btn');
    this.loadBtn = document.querySelector('.slider__description-load');
    this.arrowBtn = document.querySelectorAll('.slider__arrow');
    this.image = document.querySelector('.slider__image');
    this.body = document.querySelector('body');
    this.dom = new Dom();
    this.save = new Save();
    this.game = new Game();
  }

  isChip(target) {
    return Array.from(target.classList).includes('chip');
  }

  generateEvents() {
    this.btnsPause[0].addEventListener('click', () => {
      this.dom.switchVisibleBtn(0, 1);
      this.dom.changeVisibleSettings(true);
      this.game.stopTimer();
    });

    this.btnsPause[1].addEventListener('click', () => {
      this.dom.switchVisibleBtn(1, 0);
      this.dom.changeVisibleSettings(false);
      this.game.startTimer();
    });

    this.overlay.addEventListener('click', (event) => {
      if (event.target.dataset.screen) {
        this.dom.changeMenu(event.target.dataset.screen);
      }
    });

    this.btnStart.addEventListener('click', () => {
      this.game.startGame(this.game.select(this.selectBox),
        this.game.select(this.selectAudio), +this.game.select(this.selectIcons));
    });

    this.gameBoard.addEventListener('mousedown', (e) => {
      if (this.isChip(e.target)) {
        this.drag = true;
        this.dom.addDragBox(e, e.target, this.game.type);
      }
    });

    this.gameBoard.addEventListener('mouseup', (e) => {
      this.drag = false;
      if (this.isChip(e.target) && e.target.className.includes('drag')) {
        this.game.checkDragPosition(e);
      }
    });

    this.gameBoard.addEventListener('mousemove', (e) => {
      if (this.drag) {
        this.dom.moveDragBox(e);
      }
    });

    this.body.addEventListener('mouseleave', () => {
      if (this.drag) {
        this.drag = false;
        this.dom.removeDragBox(this.game.type);
      }
    })

    this.saveBtn.addEventListener('click', () => {
      this.save.saveGame();
    });

    this.loadBtn.addEventListener('click', () => {
      this.game.loadGame(+this.image.dataset.save);
    });

    this.arrowBtn[0].addEventListener('click', () => {
      this.dom.switchSaves(+this.image.dataset.save - 1);
    });

    this.arrowBtn[1].addEventListener('click', () => {
      this.dom.switchSaves(+this.image.dataset.save + 1);
    });

    window.onload = () => {
      this.game.initDefaultParam(...this.game.selectArr());
      this.game.generateBoard();
      this.save.loadScore();
      this.save.loadSlider();
    };

    window.onunload = () => {
      this.save.saveSettings();
      this.save.saveScore();
    };
  }
}

(() => {
  const events = new Events();
  const save = new Save();
  events.generateEvents();
  save.loadSetitngs();
})();
