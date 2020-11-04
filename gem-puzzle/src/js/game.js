export default class Game {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
    this.boardSize = 16;
  }

  checkPosition(item) {
    return Array.from(this.gameBoard.children).indexOf(item);
  }

  checkNeighbor(emptyChip) {
    const positionOfEmptyChip = this.checkPosition(emptyChip);
    return [positionOfEmptyChip - 4, positionOfEmptyChip - 1, positionOfEmptyChip + 1, positionOfEmptyChip + 4];
  }

  isNeifhbor(targetElem, emptyChip) {
    const positionOftargtElem = this.checkPosition(targetElem);
    return this.checkNeighbor(emptyChip).indexOf(positionOftargtElem) !== -1;
  }

  isFinish() {
    let arrChips = Array.from(this.gameBoard.children);
    for(let i = 0; i < this.boardSize - 1; i++) {
      arrChips[i] = (arrChips[i].dataset.id == i + 1) ? true : false;
    }
    if (arrChips.indexOf(false) === -1) {
      console.log('congratulation');
    } else console.log('fail');
  }

  changeChip(targetElem, emptyChip) {
    if (this.isNeifhbor(targetElem, emptyChip)) {
      emptyChip.className = 'chip';
      emptyChip.dataset.id = targetElem.dataset.id;
      emptyChip.textContent = targetElem.textContent;
      targetElem.dataset.id = 0;
      targetElem.textContent = '';
      targetElem.className = 'empty';

      this.isFinish();
    }
  }
};

(() => {
  const gameBoard = document.querySelector('.game-board')

  const game = new Game();

  gameBoard.addEventListener('click', (e) => {
    if(e.target.className === 'chip') {
      const emptyChip = document.querySelector('.empty')
      game.changeChip(e.target, emptyChip);
    }
  })

})();