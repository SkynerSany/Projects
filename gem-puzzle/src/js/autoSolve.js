/* global document */

import Game from './game';

export default class AutoSolve {
  constructor() {
    this.game = new Game();
    this.dx = [0, -1, 0, 1];
    this.dy = [1, 0, -1, 0];
    this.oppositeMove = [2, 3, 0, 1];
    this.x0 = 0;
    this.y0 = 0;
    this.goalX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    this.goalY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    this.board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
    this.boardGoal = [];

    this.minPrevIteration = 0;
    this.deepness = 0;
    this.resultString = '';
    this.mas = ['D', 'L', 'U', 'R'];
  }

  checkChipPos() {
    for (let i = 0; i <= 14; i += 1) {
      this.goalX[i + 1] = i % 4;
      this.goalY[i + 1] = Math.floor(i / 4);
    }
    this.goalX[0] = 4;
    this.goalY[0] = 4;
  }

  swap(y1, x1, y2, x2) {
    const value = this.board[y1][x1];
    this.board[y1][x1] = this.board[y2][x2];
    this.board[y2][x2] = value;
  }

  estimate() {
    let value = 0;
    let manhattan = 0;
    for (let i = 0; i <= 3; i += 1) {
      for (let j = 0; j <= 3; j += 1) {
        value = this.board[i][j];
        if (value > 0 && value !== this.boardGoal[i][j]) {
          manhattan += Math.abs(i - this.goalY[value]) + Math.abs(j - this.goalX[value]);
        }
      }
    }
    return manhattan;
  }

  recSearch(g, previousMove, x0, y0) {
    const h = this.estimate();
    if (h === 0) {
      return true;
    }
    const f = g + h;
    if (f > this.deepness) {
      if (this.minPrevIteration > f) {
        this.minPrevIteration = f;
      }
      return false;
    }

    let newx = 0;
    let newy = 0;
    let res = 0;
    for (let i = 0; i <= 3; i += 1) {
      if (this.oppositeMove[i] !== previousMove) {
        newx = x0 + this.dx[i];
        newy = y0 + this.dy[i];
        if (newy <= 3 && newy >= 0 && newx <= 3 && newx >= 0) {
          this.swap(y0, x0, newy, newx);
          res = this.recSearch(g + 1, i, newx, newy);
          this.swap(y0, x0, newy, newx);
          if (res === true) {
            this.resultString = `${this.resultString}${i < 2 ? i : i === 2 ? 3 : 2}`;
            return true;
          }
        }
      }
    }
    return false;
  }

  idaStar() {
    let res = false;
    this.deepness = this.estimate();
    while (this.deepness <= 50) {
      this.minPrevIteration = 10000;
      for (let i = 0; i <= 3; i += 1) {
        for (let j = 0; j <= 3; j += 1) {
          if (this.board[i][j] === 0) {
            this.x0 = j;
            this.y0 = i;
          }
        }
      }
      res = this.recSearch(0, -1, this.x0, this.y0);
      this.deepness = this.minPrevIteration;
      if (res) break;
    }
    return res;
  }

  checkResult() {
    if (this.idaStar()) {
      const pathArr = this.resultString.split('');
      let i = 0;
      const inteval = setInterval(() => {
        const emptyChip = document.querySelector('[data-id="0"]');
        const neighbor = this.game.checkNeighbor(emptyChip);
        this.game.changeChip(Array.from(this.game.gameBoard.children)[neighbor[pathArr[i]]], emptyChip);
        i += 1;
        if (i === pathArr.length) {
          clearInterval(inteval);
        }
      }, 700);
    } else {
      console.log('IDA* failed');
    }
  }

  startAuto(game) {
    this.game = game;
    const arrChips = Array.from(document.querySelectorAll('[data-id]'));
    let count = 0;
    for (let i = 0; i <= 3; i += 1) {
      for (let j = 0; j <= 3; j += 1) {
        this.board[i][j] = +arrChips[count].dataset.id;
        count += 1;
      }
    }
    this.boardGoal = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
    this.checkChipPos();
    this.checkResult();
  }
}
