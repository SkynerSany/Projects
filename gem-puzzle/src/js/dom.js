/* global document */

import * as main from './main.json';

export default class Dom {
  constructor() {
    this.main = main.default;
    this.body = document.querySelector('body');
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
}

(() => {
  const dom = new Dom();

  dom.addToBody();
})();
