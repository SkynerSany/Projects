!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(module){eval('module.exports = JSON.parse("{\\"header\\":{\\"0\\":{\\"name\\":\\"header\\",\\"class\\":\\"header\\",\\"parent\\":\\"body\\"},\\"1\\":{\\"name\\":\\"div\\",\\"class\\":\\"info\\",\\"parent\\":\\"header\\"},\\"2\\":{\\"name\\":\\"span\\",\\"class\\":\\"description\\",\\"textContent\\":\\"Time \\",\\"parent\\":\\"info\\"},\\"3\\":{\\"name\\":\\"span\\",\\"class\\":\\"timer\\",\\"textContent\\":\\"00 : 00\\",\\"parent\\":\\"info\\"},\\"4\\":{\\"name\\":\\"div\\",\\"class\\":\\"moves\\",\\"parent\\":\\"header\\"},\\"5\\":{\\"name\\":\\"span\\",\\"class\\":\\"description\\",\\"textContent\\":\\"Moves \\",\\"parent\\":\\"moves\\"},\\"6\\":{\\"name\\":\\"span\\",\\"class\\":\\"counter\\",\\"textContent\\":\\"0\\",\\"parent\\":\\"moves\\"},\\"7\\":{\\"name\\":\\"button\\",\\"class\\":\\"pause visible\\",\\"textContent\\":\\"Pause game\\",\\"parent\\":\\"header\\"},\\"8\\":{\\"name\\":\\"button\\",\\"class\\":\\"pause\\",\\"textContent\\":\\"Resume game\\",\\"parent\\":\\"header\\"}},\\"gameBoard\\":{\\"0\\":{\\"name\\":\\"div\\",\\"class\\":\\"game-board\\",\\"parent\\":\\"body\\"},\\"1\\":{\\"name\\":\\"div\\",\\"class\\":\\"overlay visible\\",\\"parent\\":\\"game-board\\"},\\"2\\":{\\"name\\":\\"div\\",\\"class\\":\\"screen__container active\\",\\"attr\\":{\\"name\\":\\"data-screen-name\\",\\"value\\":\\"main\\"},\\"parent\\":\\"overlay visible\\"},\\"3\\":{\\"name\\":\\"button\\",\\"class\\":\\"nav__btn start\\",\\"textContent\\":\\"New Game\\",\\"parent\\":\\"screen__container active\\"},\\"4\\":{\\"name\\":\\"button\\",\\"class\\":\\"nav__btn\\",\\"attr\\":{\\"name\\":\\"data-screen\\",\\"value\\":\\"saved_games\\"},\\"textContent\\":\\"Saved games\\",\\"parent\\":\\"screen__container active\\"},\\"5\\":{\\"name\\":\\"button\\",\\"class\\":\\"nav__btn\\",\\"attr\\":{\\"name\\":\\"data-screen\\",\\"value\\":\\"best_scores\\"},\\"textContent\\":\\"Best scores\\",\\"parent\\":\\"screen__container active\\"},\\"6\\":{\\"name\\":\\"button\\",\\"class\\":\\"nav__btn\\",\\"attr\\":{\\"name\\":\\"data-screen\\",\\"value\\":\\"rules\\"},\\"textContent\\":\\"Rules\\",\\"parent\\":\\"screen__container active\\"},\\"7\\":{\\"name\\":\\"button\\",\\"class\\":\\"nav__btn\\",\\"attr\\":{\\"name\\":\\"data-screen\\",\\"value\\":\\"settings\\"},\\"textContent\\":\\"Settings\\",\\"parent\\":\\"screen__container active\\"},\\"8\\":{\\"name\\":\\"div\\",\\"class\\":\\"screen__container hidden\\",\\"attr\\":{\\"name\\":\\"data-screen-name\\",\\"value\\":\\"settings\\"},\\"parent\\":\\"overlay visible\\"},\\"9\\":{\\"name\\":\\"h2\\",\\"class\\":\\"screen__title\\",\\"textContent\\":\\"Settings\\",\\"parent\\":\\"settings\\"},\\"10\\":{\\"name\\":\\"label\\",\\"class\\":\\"nav__btn\\",\\"textContent\\":\\"Field size: \\",\\"parent\\":\\"settings-box\\"},\\"11\\":{\\"name\\":\\"select\\",\\"class\\":\\"select-box\\",\\"parent\\":\\"settings-box\\"},\\"12\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"3\\"},\\"textContent\\":\\"3x3\\",\\"parent\\":\\"select-box\\"},\\"13\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"4\\"},\\"attr1\\":{\\"name\\":\\"selected\\"},\\"textContent\\":\\"4x4\\",\\"parent\\":\\"select-box\\"},\\"14\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"5\\"},\\"textContent\\":\\"5x5\\",\\"parent\\":\\"select-box\\"},\\"15\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"6\\"},\\"textContent\\":\\"6x6\\",\\"parent\\":\\"select-box\\"},\\"16\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"7\\"},\\"textContent\\":\\"7x7\\",\\"parent\\":\\"select-box\\"},\\"17\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"8\\"},\\"textContent\\":\\"8x8\\",\\"parent\\":\\"select-box\\"},\\"18\\":{\\"name\\":\\"div\\",\\"class\\":\\"settings-audio\\",\\"parent\\":\\"settings\\"},\\"19\\":{\\"name\\":\\"label\\",\\"class\\":\\"nav__btn\\",\\"textContent\\":\\"Melody: \\",\\"parent\\":\\"settings-audio\\"},\\"20\\":{\\"name\\":\\"select\\",\\"class\\":\\"select-audio\\",\\"parent\\":\\"settings-audio\\"},\\"21\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-audio-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"0\\"},\\"textContent\\":\\"Mute\\",\\"parent\\":\\"select-audio\\"},\\"22\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-audio-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"1\\"},\\"textContent\\":\\"1\\",\\"parent\\":\\"select-audio\\"},\\"23\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-audio-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"2\\"},\\"textContent\\":\\"2\\",\\"parent\\":\\"select-audio\\"},\\"24\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-audio-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"3\\"},\\"textContent\\":\\"3\\",\\"parent\\":\\"select-audio\\"},\\"25\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-audio-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"4\\"},\\"textContent\\":\\"4\\",\\"parent\\":\\"select-audio\\"},\\"26\\":{\\"name\\":\\"div\\",\\"class\\":\\"settings-box\\",\\"parent\\":\\"settings\\"},\\"27\\":{\\"name\\":\\"div\\",\\"class\\":\\"settings-icons\\",\\"parent\\":\\"settings\\"},\\"28\\":{\\"name\\":\\"label\\",\\"class\\":\\"nav__btn\\",\\"textContent\\":\\"Icons type: \\",\\"parent\\":\\"settings-icons\\"},\\"29\\":{\\"name\\":\\"select\\",\\"class\\":\\"select-icon-type\\",\\"parent\\":\\"settings-icons\\"},\\"30\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-icon-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"0\\"},\\"textContent\\":\\"Numbers\\",\\"parent\\":\\"select-icon-type\\"},\\"31\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-icon-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"1\\"},\\"textContent\\":\\"Image\\",\\"parent\\":\\"select-icon-type\\"},\\"32\\":{\\"name\\":\\"option\\",\\"class\\":\\"select-icon-option\\",\\"attr\\":{\\"name\\":\\"value\\",\\"value\\":\\"2\\"},\\"textContent\\":\\"Image + Numbers\\",\\"parent\\":\\"select-icon-type\\"},\\"33\\":{\\"name\\":\\"button\\",\\"class\\":\\"nav__btn go_back\\",\\"attr\\":{\\"name\\":\\"data-screen\\",\\"value\\":\\"main\\"},\\"textContent\\":\\"Go back\\",\\"parent\\":\\"settings\\"},\\"34\\":{\\"name\\":\\"div\\",\\"class\\":\\"screen__container hidden\\",\\"attr\\":{\\"name\\":\\"data-screen-name\\",\\"value\\":\\"saved_games\\"},\\"parent\\":\\"overlay visible\\"},\\"35\\":{\\"name\\":\\"h2\\",\\"class\\":\\"screen__title\\",\\"textContent\\":\\"Saved games:\\",\\"parent\\":\\"saved_games\\"},\\"36\\":{\\"name\\":\\"div\\",\\"class\\":\\"noSaves\\",\\"textContent\\":\\"There is no any saved games yet!\\",\\"parent\\":\\"saved_games\\"},\\"37\\":{\\"name\\":\\"button\\",\\"class\\":\\"nav__btn go_back\\",\\"attr\\":{\\"name\\":\\"data-screen\\",\\"value\\":\\"main\\"},\\"textContent\\":\\"Go back\\",\\"parent\\":\\"saved_games\\"},\\"38\\":{\\"name\\":\\"div\\",\\"class\\":\\"screen__container hidden\\",\\"attr\\":{\\"name\\":\\"data-screen-name\\",\\"value\\":\\"best_scores\\"},\\"parent\\":\\"overlay visible\\"},\\"39\\":{\\"name\\":\\"h2\\",\\"class\\":\\"screen__title\\",\\"textContent\\":\\"Best scores\\",\\"parent\\":\\"best_scores\\"},\\"40\\":{\\"name\\":\\"div\\",\\"class\\":\\"results\\",\\"parent\\":\\"best_scores\\"},\\"41\\":{\\"name\\":\\"div\\",\\"class\\":\\"date\\",\\"parent\\":\\"results\\"},\\"42\\":{\\"name\\":\\"div\\",\\"class\\":\\"subtitle\\",\\"textContent\\":\\"Date\\",\\"parent\\":\\"date\\"},\\"43\\":{\\"name\\":\\"div\\",\\"class\\":\\"moves\\",\\"parent\\":\\"results\\"},\\"44\\":{\\"name\\":\\"div\\",\\"class\\":\\"subtitle\\",\\"textContent\\":\\"Moves\\",\\"parent\\":\\"moves\\"},\\"45\\":{\\"name\\":\\"div\\",\\"class\\":\\"size\\",\\"parent\\":\\"results\\"},\\"46\\":{\\"name\\":\\"div\\",\\"class\\":\\"subtitle\\",\\"textContent\\":\\"Size\\",\\"parent\\":\\"size\\"},\\"47\\":{\\"name\\":\\"div\\",\\"class\\":\\"time\\",\\"parent\\":\\"results\\"},\\"48\\":{\\"name\\":\\"div\\",\\"class\\":\\"subtitle\\",\\"textContent\\":\\"Time\\",\\"parent\\":\\"time\\"},\\"49\\":{\\"name\\":\\"button\\",\\"class\\":\\"nav__btn go_back\\",\\"attr\\":{\\"name\\":\\"data-screen\\",\\"value\\":\\"main\\"},\\"textContent\\":\\"Go back\\",\\"parent\\":\\"best_scores\\"},\\"50\\":{\\"name\\":\\"div\\",\\"class\\":\\"screen__container hidden\\",\\"attr\\":{\\"name\\":\\"data-screen-name\\",\\"value\\":\\"rules\\"},\\"parent\\":\\"overlay visible\\"},\\"51\\":{\\"name\\":\\"h2\\",\\"class\\":\\"screen__title\\",\\"textContent\\":\\"Rules of Gem Puzzle\\",\\"parent\\":\\"rules\\"},\\"52\\":{\\"name\\":\\"p\\",\\"class\\":\\"description\\",\\"textContent\\":\\"The object of the puzzle is to place the tiles in order by making sliding moves that use the empty space.\\",\\"parent\\":\\"rules\\"},\\"53\\":{\\"name\\":\\"p\\",\\"class\\":\\"description\\",\\"textContent\\":\\"You can save your game and load it later. Or you can just use pause button. Also you can choose game field size of color in Settings\\",\\"parent\\":\\"rules\\"},\\"54\\":{\\"name\\":\\"button\\",\\"class\\":\\"nav__btn go_back\\",\\"attr\\":{\\"name\\":\\"data-screen\\",\\"value\\":\\"main\\"},\\"textContent\\":\\"Go back\\",\\"parent\\":\\"rules\\"},\\"55\\":{\\"name\\":\\"div\\",\\"class\\":\\"screen__container hidden\\",\\"attr\\":{\\"name\\":\\"data-screen-name\\",\\"value\\":\\"win\\"},\\"parent\\":\\"overlay visible\\"},\\"56\\":{\\"name\\":\\"h2\\",\\"class\\":\\"screen__title\\",\\"textContent\\":\\"Congratulations!\\",\\"parent\\":\\"win\\"},\\"57\\":{\\"name\\":\\"img\\",\\"class\\":\\"screen__img image\\",\\"parent\\":\\"win\\"},\\"58\\":{\\"name\\":\\"button\\",\\"class\\":\\"nav__btn go_back\\",\\"attr\\":{\\"name\\":\\"data-screen\\",\\"value\\":\\"main\\"},\\"textContent\\":\\"Go back\\",\\"parent\\":\\"win\\"},\\"59\\":{\\"name\\":\\"button\\",\\"class\\":\\"save-btn\\",\\"parent\\":\\"screen__container active\\"},\\"60\\":{\\"name\\":\\"style\\",\\"class\\":\\"img-style\\",\\"textContent\\":\\".image {background-image: url(\'src/assets/box/1.jpg\');}\\",\\"parent\\":\\"game-board\\"}}}");\n\n//# sourceURL=webpack:///./src/js/main.json?')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./src/scss/style.scss\nvar style = __webpack_require__(2);\n\n// EXTERNAL MODULE: ./src/js/main.json\nvar main = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./src/js/dom.js\n/* global document */\r\n\r\n\r\n\r\nclass dom_Dom {\r\n  constructor() {\r\n    this.main = main;\r\n    this.body = document.querySelector('body');\r\n    this.btnsPause = document.querySelectorAll('.pause');\r\n    this.overlay = document.querySelector('.overlay');\r\n    this.gameBoard = document.querySelector('.game-board');\r\n    this.default = 0;\r\n  }\r\n\r\n  generateElements(obj) {\r\n    const objElements = this.main[obj];\r\n    const result = [];\r\n    for (let key = 0; key < Object.keys(objElements).length; key += 1) {\r\n      const tag = document.createElement(objElements[key].name);\r\n      tag.className = objElements[key].class;\r\n      if (objElements[key].attr) {\r\n        tag.setAttribute(objElements[key].attr.name, objElements[key].attr.value);\r\n      }\r\n      if (objElements[key].attr1) {\r\n        tag.setAttribute(objElements[key].attr1.name, '');\r\n      }\r\n      if (objElements[key].textContent) {\r\n        tag.textContent = objElements[key].textContent;\r\n      }\r\n      result.push(tag);\r\n    }\r\n    return result;\r\n  }\r\n\r\n  addChild(arrElements, obj) {\r\n    const objName = this.main[obj];\r\n    arrElements.forEach((item) => {\r\n      for (let key = 0; key < Object.keys(objName).length; key += 1) {\r\n        if (objName[key].parent === item.dataset.screenName) {\r\n          item.append(arrElements[key]);\r\n        } else if (objName[key].parent === item.className) {\r\n          item.append(arrElements[key]);\r\n        }\r\n      }\r\n    });\r\n    return arrElements[0];\r\n  }\r\n\r\n  generateHeader() {\r\n    const headerArr = this.generateElements('header');\r\n    this.header = this.addChild(headerArr, 'header');\r\n  }\r\n\r\n  generateGameBoard() {\r\n    const gameBoardArr = this.generateElements('gameBoard');\r\n    this.gameBoard = this.addChild(gameBoardArr, 'gameBoard');\r\n  }\r\n\r\n  addToBody() {\r\n    this.generateHeader();\r\n    this.generateGameBoard();\r\n    this.body.append(this.header);\r\n    this.body.append(this.gameBoard);\r\n  }\r\n\r\n  switchVisibleBtn(a, b) {\r\n    this.btnsPause[a].classList.remove('visible');\r\n    this.btnsPause[b].classList.add('visible');\r\n  }\r\n\r\n  changeVisibleSettings(isClose) {\r\n    if (isClose) {\r\n      this.overlay.classList.add('visible');\r\n      this.gameBoard.style.border = 'none';\r\n    } else {\r\n      this.overlay.classList.remove('visible');\r\n      this.gameBoard.style.border = '3px solid';\r\n    }\r\n  }\r\n\r\n  changeMenu(target) {\r\n    this.prevMenu = document.querySelector('.active');\r\n    const targetElem = document.querySelector(`[data-screen-name=\"${target}\"]`);\r\n\r\n    this.prevMenu.classList.remove('active');\r\n    this.prevMenu.classList.add('hidden');\r\n    targetElem.classList.remove('hidden');\r\n    targetElem.classList.add('active');\r\n  }\r\n\r\n  openWinLayer(type) {\r\n    const winBox = document.querySelector('[data-screen-name=\"win\"]');\r\n    const prevMenu = document.querySelector('.active');\r\n    this.changeVisibleSettings(true);\r\n\r\n    prevMenu.classList.remove('active');\r\n    prevMenu.classList.add('hidden');\r\n\r\n    winBox.classList.remove('hidden');\r\n    winBox.classList.add('active');\r\n\r\n    if (type) {\r\n      const congratImg = document.querySelector('.screen__img');\r\n      congratImg.style.display = 'block';\r\n    }\r\n  }\r\n\r\n  updateBestScore(...args) {\r\n    this.result = Array.from(document.querySelector('.results').children);\r\n    let div = this.default;\r\n    this.result.forEach((item, i) => {\r\n      div = document.createElement('div');\r\n      div.className = `${item.className}-text`;\r\n      div.textContent = args[i];\r\n      item.append(div);\r\n    });\r\n  }\r\n\r\n  switchBgStyle(type, imgSrc) {\r\n    this.style = document.querySelector('.img-style');\r\n    this.style.textContent = `.image {background-image: ${imgSrc};}`;\r\n    if (type === 2) {\r\n      this.style.textContent = `.image {background-image: ${imgSrc}; color: #ffffff; text-shadow: 2px 2px 5px #000;}`;\r\n    }\r\n  }\r\n\r\n  generateTable(boardSize) {\r\n    this.gameBoard.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;\r\n  }\r\n\r\n  generateChips(boardSize, type, sortArr, arrImagPositions) {\r\n    let div = this.default;\r\n    for (let i = this.default; i < boardSize * boardSize; i += 1) {\r\n      div = document.createElement('div');\r\n\r\n      if (!type) {\r\n        div.className = 'chip';\r\n        div.textContent = sortArr[i];\r\n      } else {\r\n        div.className = 'chip image';\r\n        div.style.backgroundPosition = arrImagPositions[sortArr[i] - 1];\r\n        if (type === 2) {\r\n          div.textContent = sortArr[i];\r\n        }\r\n      }\r\n\r\n      div.setAttribute('data-id', sortArr[i]);\r\n      this.gameBoard.prepend(div);\r\n    }\r\n    const empty = document.querySelector('[data-id=\"0\"]');\r\n    empty.className = 'empty';\r\n    empty.textContent = '';\r\n  }\r\n\r\n  clearBoard() {\r\n    let i = this.default;\r\n    while (this.gameBoard.children[this.default].className !== 'overlay') {\r\n      this.gameBoard.removeChild(document.querySelector(`[data-id=\"${i}\"]`));\r\n      i += 1;\r\n    }\r\n  }\r\n\r\n  switchClassChips(target, empty, type) {\r\n    const targetElem = target;\r\n    const emptyChip = empty;\r\n\r\n    const emptyChipStyle = emptyChip.style.backgroundPosition;\r\n    emptyChip.className = (!type) ? 'chip' : 'chip image';\r\n    emptyChip.dataset.id = targetElem.dataset.id;\r\n    emptyChip.textContent = targetElem.textContent;\r\n    emptyChip.style.backgroundPosition = targetElem.style.backgroundPosition;\r\n\r\n    targetElem.dataset.id = this.default;\r\n    targetElem.textContent = '';\r\n    targetElem.className = 'empty';\r\n    targetElem.style = emptyChipStyle;\r\n  }\r\n}\r\n\r\n(() => {\r\n  const dom = new dom_Dom();\r\n  dom.addToBody();\r\n})();\r\n\n// CONCATENATED MODULE: ./src/js/game.js\n/* global document, Audio, window */\r\n\r\n\r\n\r\nclass game_Game {\r\n  constructor() {\r\n    this.gameBoard = document.querySelector('.game-board');\r\n    this.timer = document.querySelector('.timer');\r\n    this.counter = document.querySelector('.counter');\r\n    this.audioTags = document.querySelectorAll('.audio');\r\n    this.btnsPause = document.querySelectorAll('.pause');\r\n    this.dom = new dom_Dom();\r\n    this.default = 0;\r\n  }\r\n\r\n  checkPosition(item) {\r\n    return Array.from(this.gameBoard.children).indexOf(item);\r\n  }\r\n\r\n  checkNeighbor(emptyChip) {\r\n    const positionOfEmptyChip = this.checkPosition(emptyChip);\r\n    return [positionOfEmptyChip - this.boardSize, positionOfEmptyChip - 1,\r\n      positionOfEmptyChip + 1, positionOfEmptyChip + this.boardSize];\r\n  }\r\n\r\n  isNeifhbor(targetElem, emptyChip) {\r\n    const positionOftargtElem = this.checkPosition(targetElem);\r\n    return this.checkNeighbor(emptyChip).indexOf(positionOftargtElem) !== -1;\r\n  }\r\n\r\n  isFinish() {\r\n    const arrChips = Array.from(this.gameBoard.children);\r\n    for (let i = this.default; i < arrChips.length - 3; i += 1) {\r\n      arrChips[i] = (+arrChips[i].dataset.id === i + 1);\r\n    }\r\n    if (arrChips.indexOf(false) === -1) {\r\n      this.finish();\r\n    }\r\n  }\r\n\r\n  finish() {\r\n    this.stopTimer();\r\n    const date = new Date();\r\n    const strDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;\r\n    this.dom.openWinLayer(this.type);\r\n    new Audio('src/assets/audio/congratulations.mp3').play();\r\n    this.dom.updateBestScore(strDate, this.moves, `${this.boardSize}x${this.boardSize}`, this.time);\r\n  }\r\n\r\n  changeChip(target, empty) {\r\n    if (this.isNeifhbor(target, empty)) {\r\n      this.dom.switchClassChips(target, empty, this.type);\r\n\r\n      if (this.audioNumber) {\r\n        this.audio.currentTime = this.default;\r\n        this.audio.play();\r\n      }\r\n\r\n      this.moves += 1;\r\n      this.updateMoves();\r\n      this.isFinish();\r\n    }\r\n  }\r\n\r\n  addZero(number) {\r\n    this.number = (number < 10) ? `0${number}` : number;\r\n    return this.number;\r\n  }\r\n\r\n  checkMinutes() {\r\n    if (this.seconds === 60) {\r\n      this.seconds = this.default;\r\n      this.minutes += 1;\r\n    }\r\n  }\r\n\r\n  updateTimer(minutes = this.minutes, seconds = this.seconds) {\r\n    this.time = `${this.addZero(minutes)} : ${this.addZero(seconds)}`;\r\n    this.timer.textContent = this.time;\r\n  }\r\n\r\n  updateMoves(moves = this.moves) {\r\n    this.counter.textContent = moves;\r\n  }\r\n\r\n  startTimer() {\r\n    this.interval = setInterval(() => {\r\n      this.seconds += 1;\r\n      this.checkMinutes();\r\n      this.updateTimer();\r\n    }, 1000);\r\n  }\r\n\r\n  stopTimer() {\r\n    clearInterval(this.interval);\r\n  }\r\n\r\n  generateRandomNumbres() {\r\n    this.sortArr = [];\r\n    for (let i = this.default; i < this.boardSize * this.boardSize; i += 1) {\r\n      this.sortArr[i] = i;\r\n    }\r\n    return this.sortArr.sort(() => 0.5 - Math.random());\r\n  }\r\n\r\n  generateArrImgPos() {\r\n    this.arrImagPositions = [];\r\n    for (let i = this.default; i < this.boardSize; i += 1) {\r\n      for (let j = this.default; j < this.boardSize; j += 1) {\r\n        this.arrImagPositions.push(`${99 * (j / (this.boardSize - 1))}% ${99 * (i / (this.boardSize - 1))}%`);\r\n      }\r\n    }\r\n  }\r\n\r\n  generateBoard(sortArr = this.generateRandomNumbres(), imgSrc = this.imgSrc) {\r\n    this.dom.generateTable(this.boardSize);\r\n    this.generateArrImgPos();\r\n    this.dom.switchBgStyle(this.type, imgSrc);\r\n    this.dom.generateChips(this.boardSize, this.type, sortArr, this.arrImagPositions);\r\n\r\n    this.updateTimer();\r\n    this.updateMoves();\r\n  }\r\n\r\n  select(selectBox) {\r\n    return selectBox.options[selectBox.options.selectedIndex].value;\r\n  }\r\n\r\n  selectArr() {\r\n    const selectBox = document.querySelector('.select-box');\r\n    const selectAudio = document.querySelector('.select-audio');\r\n    const selectIcons = document.querySelector('.select-icon-type');\r\n\r\n    return [this.select(selectBox), this.select(selectAudio),\r\n      +this.select(selectIcons)];\r\n  }\r\n\r\n  startGame(boardSize, audioNumber, type, minutes,\r\n    seconds, moves, rundomNumbers, imgSrc) {\r\n    this.generateEvents();\r\n    this.dom.switchVisibleBtn(1, 0);\r\n    this.dom.changeVisibleSettings(false);\r\n\r\n    this.game = new game_Game();\r\n    this.initDefaultParam(boardSize, audioNumber, type, minutes,\r\n      seconds, moves);\r\n    this.dom.clearBoard();\r\n    this.generateBoard(rundomNumbers, imgSrc);\r\n    this.startTimer();\r\n\r\n    this.btnsPause[0].addEventListener('click', () => {\r\n      this.stopTimer();\r\n    });\r\n\r\n    this.btnsPause[1].addEventListener('click', () => {\r\n      this.startTimer();\r\n    });\r\n  }\r\n\r\n  initDefaultParam(boardSize, audioNumber, type, minutes = this.default,\r\n    seconds = this.default, moves = this.default) {\r\n    this.type = type;\r\n    this.minutes = minutes;\r\n    this.seconds = seconds;\r\n    this.moves = moves;\r\n    this.boardSize = +boardSize;\r\n    this.audioNumber = +audioNumber;\r\n    this.audio = new Audio((this.audioNumber) ? `src/assets/audio/${[this.audioNumber]}.mp3` : '');\r\n    this.imgSrc = `url(\"src/assets/box/${Math.floor(Math.random() * (150 - 1) + 1)}.jpg\")`;\r\n  }\r\n\r\n  generateEvents() {\r\n    this.btnStart = document.querySelector('.start');\r\n    this.selectBox = document.querySelector('.select-box');\r\n    this.selectAudio = document.querySelector('.select-audio');\r\n    this.selectIcons = document.querySelector('.select-icon-type');\r\n    this.saveBtn = document.querySelector('.save-btn');\r\n\r\n    this.btnStart.addEventListener('click', () => {\r\n      this.startGame(this.select(this.selectBox),\r\n        this.select(this.selectAudio), +this.select(this.selectIcons));\r\n    });\r\n\r\n    this.gameBoard.addEventListener('click', (e) => {\r\n      if (Array.from(e.target.classList).includes('chip')) {\r\n        const emptyChip = document.querySelector('.empty');\r\n        this.changeChip(e.target, emptyChip);\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\n(() => {\r\n  const game = new game_Game();\r\n\r\n  game.generateEvents();\r\n\r\n  window.onload = () => {\r\n    game.initDefaultParam(...game.selectArr());\r\n    game.generateBoard();\r\n  };\r\n})();\r\n\n// CONCATENATED MODULE: ./src/js/save.js\n/* global document, window, html2canvas */\r\n\r\n\r\n\r\n\r\nclass save_Save {\r\n  constructor() {\r\n    this.game = new game_Game();\r\n    this.dom = new dom_Dom();\r\n    this.gameBoard = document.querySelector('.game-board');\r\n    this.selectBox = document.querySelector('.select-box');\r\n    this.selectAudio = document.querySelector('.select-audio');\r\n    this.selectIcons = document.querySelector('.select-icon-type');\r\n    this.default = 0;\r\n  }\r\n\r\n  inLoacalStorage(elem) {\r\n    this.local = elem;\r\n    return !!window.localStorage[this.local];\r\n  }\r\n\r\n  saveSettings() {\r\n    const selectArr = JSON.stringify([this.selectAudio.options.selectedIndex,\r\n      this.selectBox.options.selectedIndex, this.selectIcons.options.selectedIndex]);\r\n    if (this.inLoacalStorage('settings')) {\r\n      window.localStorage.settings = selectArr;\r\n    } else {\r\n      window.localStorage.setItem('settings', selectArr);\r\n    }\r\n  }\r\n\r\n  loadSetitngs() {\r\n    if (this.inLoacalStorage('settings')) {\r\n      const selectArr = JSON.parse(window.localStorage.settings);\r\n      this.selectAudio.options[selectArr[this.default]].selected = true;\r\n      this.selectBox.options[selectArr[1]].selected = true;\r\n      this.selectIcons.options[selectArr[2]].selected = true;\r\n    }\r\n  }\r\n\r\n  saveGame() {\r\n    this.dom.changeVisibleSettings(false);\r\n    this.gameBoard.style.border = 'none';\r\n    const saveArr = this.getGameInfo();\r\n    this.dom.changeVisibleSettings(true);\r\n\r\n    html2canvas(document.querySelector('.game-board')).then((canvas) => {\r\n      const time = document.querySelector('.timer').textContent.split(' : ');\r\n      const gameObj = {\r\n        size: +saveArr[this.default],\r\n        audio: saveArr[1],\r\n        type: saveArr[2],\r\n        imgSrc: saveArr[3],\r\n        randomNumbers: saveArr[4],\r\n        moves: +document.querySelector('.counter').textContent,\r\n        minutes: +time[this.default],\r\n        seconds: +time[1],\r\n        gameImg: canvas.toDataURL(),\r\n      };\r\n\r\n      if (this.inLoacalStorage('saves')) {\r\n        const obj = JSON.parse(window.localStorage.saves);\r\n        obj[Object.keys(obj).length] = gameObj;\r\n        window.localStorage.saves = JSON.stringify(obj);\r\n      } else {\r\n        window.localStorage.setItem('saves', JSON.stringify({ 0: gameObj }));\r\n      }\r\n    });\r\n  }\r\n\r\n  getGameInfo() {\r\n    let imgSrc = document.querySelector('style').textContent;\r\n    const arrChips = Array.from(this.gameBoard.children);\r\n    const randomNumbers = [];\r\n\r\n    imgSrc = imgSrc.slice(imgSrc.indexOf('url'), imgSrc.indexOf(')') + 1);\r\n    for (let i = this.default; i < arrChips.length - 2; i += 1) {\r\n      randomNumbers.push(+arrChips[i].dataset.id);\r\n    }\r\n    this.gameInfo = this.game.selectArr();\r\n    this.gameInfo.push(imgSrc, randomNumbers.reverse());\r\n    return this.gameInfo;\r\n  }\r\n\r\n  loadGame() {\r\n    const gameSettings = JSON.parse(window.localStorage.saves)[0];\r\n\r\n    this.game = new game_Game();\r\n\r\n    this.selectAudio.options[gameSettings.audio].selected = true;\r\n    this.selectBox.options[`${gameSettings.size - 3}`].selected = true;\r\n    this.selectIcons.options[`${gameSettings.type}`].selected = true;\r\n\r\n    this.game.startGame(gameSettings.size,\r\n      gameSettings.audio, +gameSettings.type, gameSettings.minutes,\r\n      gameSettings.seconds, gameSettings.moves, gameSettings.randomNumbers, gameSettings.imgSrc);\r\n  }\r\n}\r\n\r\n(() => {\r\n  const save = new save_Save();\r\n  save.loadSetitngs();\r\n  window.onunload = () => {\r\n    save.saveSettings();\r\n  };\r\n})();\r\n\n// CONCATENATED MODULE: ./src/js/events.js\n/* global document */\r\n\r\n\r\n\r\n\r\nclass events_Events {\r\n  constructor() {\r\n    this.gameBoard = document.querySelector('.game-board');\r\n    this.btnsPause = document.querySelectorAll('.pause');\r\n    this.overlay = document.querySelector('.overlay');\r\n    this.btnStart = document.querySelector('.start');\r\n    this.selectBox = document.querySelector('.select-box');\r\n    this.selectAudio = document.querySelector('.select-audio');\r\n    this.selectIcons = document.querySelector('.select-icon-type');\r\n    this.saveBtn = document.querySelector('.save-btn');\r\n    this.dom = new dom_Dom();\r\n    this.save = new save_Save();\r\n  }\r\n\r\n  generateEvents() {\r\n    this.btnsPause[0].addEventListener('click', () => {\r\n      this.dom.switchVisibleBtn(0, 1);\r\n      this.dom.changeVisibleSettings(true);\r\n    });\r\n\r\n    this.btnsPause[1].addEventListener('click', () => {\r\n      this.dom.switchVisibleBtn(1, 0);\r\n      this.dom.changeVisibleSettings(false);\r\n    });\r\n\r\n    this.overlay.addEventListener('click', (event) => {\r\n      if (event.target.dataset.screen) {\r\n        this.dom.changeMenu(event.target.dataset.screen);\r\n      }\r\n    });\r\n\r\n    this.saveBtn.addEventListener('click', () => {\r\n      this.save.saveGame();\r\n      this.save.loadGame();\r\n    });\r\n  }\r\n}\r\n\r\n(() => {\r\n  const events = new events_Events();\r\n  events.generateEvents();\r\n})();\r\n\n// CONCATENATED MODULE: ./src/js/app.js\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js_+_4_modules?")},function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?")}]);