/* global document */

import Dom from './dom';
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
    this.dom = new Dom();
    this.save = new Save();
  }

  generateEvents() {
    this.btnsPause[0].addEventListener('click', () => {
      this.dom.switchVisibleBtn(0, 1);
      this.dom.changeVisibleSettings(true);
    });

    this.btnsPause[1].addEventListener('click', () => {
      this.dom.switchVisibleBtn(1, 0);
      this.dom.changeVisibleSettings(false);
    });

    this.overlay.addEventListener('click', (event) => {
      if (event.target.dataset.screen) {
        this.dom.changeMenu(event.target.dataset.screen);
      }
    });

    this.saveBtn.addEventListener('click', () => {
      this.save.saveGame();
      this.save.loadGame();
    });
  }
}

(() => {
  const events = new Events();
  events.generateEvents();
})();
