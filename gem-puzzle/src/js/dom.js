/* global document, window */
import * as main from './main.json';

export default class Dom {
  constructor() {
    this.main = main.default;
    this.body = document.querySelector('body');
    this.btnsPause = document.querySelectorAll('.pause');
    this.overlay = document.querySelector('.overlay');
    this.gameBoard = document.querySelector('.game-board');
    this.text = document.querySelectorAll('.slider__description-info');
    this.image = document.querySelector('.slider__image');
    this.arrowBtn = document.querySelectorAll('.slider__arrow');
    this.default = 0;
  }

  generateElements(obj) {
    const objElements = this.main[obj];
    const result = [];
    for (let key = 0; key < Object.keys(objElements).length; key += 1) {
      const tag = document.createElement(objElements[key].name);
      tag.className = objElements[key].class;
      if (objElements[key].attr) {
        tag.setAttribute(objElements[key].attr.name, objElements[key].attr.value);
      }
      if (objElements[key].attr1) {
        tag.setAttribute(objElements[key].attr1.name, '');
      }
      if (objElements[key].textContent) {
        tag.textContent = objElements[key].textContent;
      }
      result.push(tag);
    }
    return result;
  }

  addChild(arrElements, obj) {
    const objName = this.main[obj];
    arrElements.forEach((item) => {
      for (let key = 0; key < Object.keys(objName).length; key += 1) {
        if (objName[key].parent === item.dataset.screenName) {
          item.append(arrElements[key]);
        } else if (objName[key].parent === item.className) {
          item.append(arrElements[key]);
        }
      }
    });
    return arrElements[0];
  }

  addZero(number) {
    this.number = (number < 10) ? `0${number}` : number;
    return this.number;
  }

  generateHeader() {
    const headerArr = this.generateElements('header');
    this.header = this.addChild(headerArr, 'header');
  }

  generateGameBoard() {
    const gameBoardArr = this.generateElements('gameBoard');
    this.gameBoard = this.addChild(gameBoardArr, 'gameBoard');
  }

  addToBody() {
    this.generateHeader();
    this.generateGameBoard();
    this.body.append(this.header);
    this.body.append(this.gameBoard);
  }

  switchVisibleBtn(a, b) {
    this.btnsPause[a].classList.remove('visible');
    this.btnsPause[b].classList.add('visible');
  }

  changeVisibleSettings(isClose) {
    if (isClose) {
      this.overlay.classList.add('visible');
    } else {
      this.overlay.classList.remove('visible');
    }
  }

  changeMenu(target) {
    this.prevMenu = document.querySelector('.active');
    const targetElem = document.querySelector(`[data-screen-name="${target}"]`);

    this.prevMenu.classList.remove('active');
    this.prevMenu.classList.add('hidden');
    targetElem.classList.remove('hidden');
    targetElem.classList.add('active');
  }

  openWinLayer(type) {
    this.winBox = document.querySelector('[data-screen-name="win"]');
    const prevMenu = document.querySelector('.active');
    this.changeVisibleSettings(true);

    prevMenu.classList.remove('active');
    prevMenu.classList.add('hidden');

    this.winBox.classList.remove('hidden');
    this.winBox.classList.add('active');

    if (type) {
      const congratImg = document.querySelector('.screen__img');
      congratImg.style.display = 'block';
    }
  }

  updateBestScore(...args) {
    this.result = Array.from(document.querySelector('.results').children);
    let div = this.default;
    this.result.forEach((item, i) => {
      div = document.createElement('div');
      div.className = `${item.className}-text`;
      div.textContent = args[i];
      item.append(div);
    });
  }

  switchBgStyle(type, imgSrc) {
    this.style = document.querySelector('.img-style');
    this.style.textContent = `.image {background-image: ${imgSrc};}`;
    if (type === 2) {
      this.style.textContent = `.image {background-image: ${imgSrc}; color: #ffffff; text-shadow: 2px 2px 5px #000;}`;
    }
  }

  generateTable(boardSize) {
    this.gameBoard.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
  }

  generateChips(boardSize, type, sortArr, arrImagPositions) {
    let div = this.default;
    for (let i = this.default; i < boardSize * boardSize; i += 1) {
      div = document.createElement('div');

      if (!type) {
        div.className = 'chip';
        div.textContent = sortArr[i];
      } else {
        div.className = 'chip image';
        div.style.backgroundPosition = arrImagPositions[sortArr[i] - 1];
        if (type === 2) {
          div.textContent = sortArr[i];
        }
      }
      div.setAttribute('draggable', true);
      div.setAttribute('data-id', sortArr[i]);
      this.gameBoard.prepend(div);
    }
    const empty = document.querySelector('[data-id="0"]');
    empty.removeAttribute('draggable');
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

  changeChips(target, empty, type, eventType) {
    const targetElem = target;
    const emptyChip = empty;

    const emptyChipStyle = emptyChip.style.backgroundPosition;
    emptyChip.className = (!type) ? 'chip' : 'chip image';
    emptyChip.dataset.id = targetElem.dataset.id;
    emptyChip.textContent = targetElem.textContent;
    emptyChip.style.backgroundPosition = targetElem.style.backgroundPosition;
    emptyChip.setAttribute('draggable', true);
    if (!eventType) {
      emptyChip.style.opacity = '0';
    }

    targetElem.dataset.id = this.default;
    targetElem.textContent = '';
    targetElem.className = 'empty';
    targetElem.style = emptyChipStyle;
    targetElem.removeAttribute('draggable');
  }

  generateslider() {
    const noSaves = document.querySelector('.noSaves');
    const slider = document.querySelector('.slider');

    noSaves.style.display = 'none';
    slider.style.display = 'flex';

    this.switchSaves();
    this.image.setAttribute('data-save', 0);
  }

  generateFinishMessage(moves, minutes, seconds, size) {
    const p = document.createElement('p');
    p.className = 'win__message';
    p.textContent = `Outstanding! You won the game in ${moves} moves! You've spent ${this.addZero(minutes)} min ${this.addZero(seconds)} sec and you solved ${size}x${size} puzzle!`;
    this.winBox.append(p);
  }

  switchSaves(count = 0) {
    this.saves = JSON.parse(window.localStorage.saves);
    if (!count) {
      this.arrowBtn[0].disabled = true;
      if (Object.keys(this.saves).length === 1) {
        this.arrowBtn[1].disabled = true;
      } else {
        this.arrowBtn[1].disabled = false;
      }
    } else if (count === Object.keys(this.saves).length - 1) {
      this.arrowBtn[1].disabled = true;
      this.arrowBtn[0].disabled = false;
    } else {
      this.arrowBtn[0].disabled = false;
      this.arrowBtn[1].disabled = false;
    }
    this.image.dataset.save = count;
    this.image.style.background = `url(${this.saves[count].gameImg}) -2px 0 / cover`;

    this.text[0].textContent = `Board size: ${this.saves[count].size}x${this.saves[count].size}`;
    this.text[1].textContent = `Time: ${this.addZero(this.saves[count].minutes)} : ${this.addZero(this.saves[count].seconds)}`;
    this.text[2].textContent = `Moves: ${this.saves[count].moves}`;
  }

  createMovableChip(target, empty) {
    const gameBoardPosition = this.gameBoard.getBoundingClientRect();
    const targetPosition = target.getBoundingClientRect();
    const div = document.createElement('div');
    div.className = `${target.className} anim`;
    div.dataset.id = target.dataset.id;
    div.textContent = target.textContent;
    div.style.backgroundPosition = target.style.backgroundPosition;
    div.style.height = `${target.clientHeight}px`;
    div.style.width = `${target.clientWidth}px`;
    div.style.top = `${targetPosition.y - gameBoardPosition.y}px`;
    div.style.left = `${targetPosition.x - gameBoardPosition.x}px`;
    this.gameBoard.append(div);
    this.moveChip(div, empty, gameBoardPosition);
  }

  moveChip(target, empty, gameBoardPosition) {
    const emptyPossition = empty.getBoundingClientRect();
    target.style.top = `${emptyPossition.y - gameBoardPosition.y}px`;
    target.style.left = `${emptyPossition.x - gameBoardPosition.x}px`;
    setTimeout(() => {
      this.removeMovableChip(target);
    }, 500);
  }

  removeMovableChip(target){
    const prevChip = document.querySelector(`[data-id="${target.dataset.id}"]`);
    prevChip.style.opacity = 1;
    target.remove();
    prevChip.style.opacity = '';
  }
}

(() => {
  const dom = new Dom();
  dom.addToBody();
})();
