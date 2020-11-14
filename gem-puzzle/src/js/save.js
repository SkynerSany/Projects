/* global document, window, html2canvas */

import Dom from './dom';
import Game from './game';

export default class Save {
  constructor() {
    this.game = new Game();
    this.dom = new Dom();
    this.gameBoard = document.querySelector('.game-board');
    this.selectBox = document.querySelector('.select-box');
    this.selectAudio = document.querySelector('.select-audio');
    this.selectIcons = document.querySelector('.select-icon-type');
    this.default = 0;
  }

  inLoacalStorage(elem) {
    this.local = elem;
    return !!window.localStorage[this.local];
  }

  saveSettings() {
    const selectArr = JSON.stringify([this.selectAudio.options.selectedIndex,
      this.selectBox.options.selectedIndex, this.selectIcons.options.selectedIndex]);
    if (this.inLoacalStorage('settings')) {
      window.localStorage.settings = selectArr;
    } else {
      window.localStorage.setItem('settings', selectArr);
    }
  }

  loadSetitngs() {
    if (this.inLoacalStorage('settings')) {
      const selectArr = JSON.parse(window.localStorage.settings);
      this.selectAudio.options[selectArr[this.default]].selected = true;
      this.selectBox.options[selectArr[1]].selected = true;
      this.selectIcons.options[selectArr[2]].selected = true;
    }
  }

  saveGame() {
    this.dom.changeVisibleSettings(false);
    this.gameBoard.style.border = 'none';
    const saveArr = this.getGameInfo();

    html2canvas(document.querySelector('.game-board')).then((canvas) => {
      this.dom.changeVisibleSettings(true);
      const time = document.querySelector('.timer').textContent.split(' : ');
      const gameObj = {
        size: +saveArr[this.default],
        audio: saveArr[1],
        type: saveArr[2],
        imgSrc: saveArr[3],
        randomNumbers: saveArr[4],
        moves: +document.querySelector('.counter').textContent,
        minutes: +time[this.default],
        seconds: +time[1],
        gameImg: canvas.toDataURL('image/jpeg'),
      };

      if (this.inLoacalStorage('saves')) {
        const obj = JSON.parse(window.localStorage.saves);
        obj[Object.keys(obj).length] = gameObj;
        window.localStorage.saves = JSON.stringify(obj);
      } else {
        window.localStorage.setItem('saves', JSON.stringify({ 0: gameObj }));
      }
      this.loadSlider();
    });
  }

  getGameInfo() {
    let imgSrc = document.querySelector('style').textContent;
    const arrChips = Array.from(this.gameBoard.children);
    const randomNumbers = [];

    imgSrc = imgSrc.slice(imgSrc.indexOf('url'), imgSrc.indexOf(')') + 1);
    for (let i = this.default; i < arrChips.length - 2; i += 1) {
      randomNumbers.push(+arrChips[i].dataset.id);
    }
    this.gameInfo = this.game.selectArr();
    this.gameInfo.push(imgSrc, randomNumbers.reverse());
    return this.gameInfo;
  }

  saveScore() {
    const scoresObj = {};
    const resultsChild = Array.from(document.querySelector('.results').children);
    resultsChild.forEach((item) => {
      Array.from(item.children).forEach((elem, j, arr) => {
        if (j !== 0) {
          if (!scoresObj[`${j - 1}`]) {
            scoresObj[`${j - 1}`] = {};
          }
          scoresObj[`${j - 1}`][arr[0].textContent] = elem.textContent;
        }
      });
    });

    if (this.inLoacalStorage('scores')) {
      window.localStorage.scores = JSON.stringify(scoresObj);
    } else {
      window.localStorage.setItem('scores', JSON.stringify(scoresObj));
    }
  }

  loadScore() {
    const scores = JSON.parse(window.localStorage.scores);
    for (let i = 0; i < Object.keys(scores).length; i += 1) {
      this.dom.updateBestScore(scores[i].Date, scores[i].Moves, scores[i].Size, scores[i].Time);
    }
  }

  loadSlider() {
    if (this.inLoacalStorage('saves')) {
      this.dom.generateslider();
    }
  }
}
