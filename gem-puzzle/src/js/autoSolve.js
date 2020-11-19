/* global document */

export default class autoSolve {
  constructor(game) {
    this.board = [];
    this.boardGoal = [];
    this.goalX = [];
    this.goalY = [];
    this.resultArr = [];
    this.dx = [0, -1, 1, 0];
    this.dy = [-1, 0, 0, 1];
    this.revers = [0, 2, 1, 3];
    this.game = game;
  }

  createBoardGoal() {
    let count = 1;
    for (let i = 0; i < this.game.boardSize; i += 1) {
      for (let j = 0; j < this.game.boardSize; j += 1) {
        if (!this.boardGoal[i]) {
          this.boardGoal[i] = [];
        }
        if (count !== this.game.boardSize * this.game.boardSize) {
          this.boardGoal[i][j] = count;
        } else this.boardGoal[i][j] = 0;
        count += 1;
      }
    }
  }

  checkChipPos() {
    for (let i = 0; i < this.game.boardSize * this.game.boardSize - 1; i += 1) {
      this.goalX[i + 1] = i % this.game.boardSize;
      this.goalY[i + 1] = Math.floor(i / this.game.boardSize);
    }
    this.goalX[0] = this.game.boardSize;
    this.goalY[0] = this.game.boardSize;
  }

  estimate() {
    let value = 0;
    let manhattan = 0;
    for (let i = 0; i < this.game.boardSize; i += 1) {
      for (let j = 0; j < this.game.boardSize; j += 1) {
        value = this.board[i][j];
        if (value > 0 && value !== this.boardGoal[i][j]) {
          manhattan += Math.abs(i - this.goalY[value]) + Math.abs(j - this.goalX[value]);
        }
      }
    }
    return manhattan;
  }

  swap(y1, x1, y2, x2) {
    const value = this.board[y1][x1];
    this.board[y1][x1] = this.board[y2][x2];
    this.board[y2][x2] = value;
  }

  search(g, previousMove, x0, y0) {
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
    for (let i = 0; i < 4; i += 1) {
      if (this.revers[i] !== previousMove) {
        newx = x0 + this.dx[i];
        newy = y0 + this.dy[i];
        if (newy < this.game.boardSize && newy >= 0 && newx < this.game.boardSize && newx >= 0) {
          this.swap(y0, x0, newy, newx);
          const res = this.search(g + 1, i, newx, newy);
          this.swap(y0, x0, newy, newx);
          if (res) {
            this.resultArr.unshift(i);
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
    while (this.deepness <= 55) {
      this.minPrevIteration = 10000;
      for (let i = 0; i < this.game.boardSize; i += 1) {
        for (let j = 0; j < this.game.boardSize; j += 1) {
          if (this.board[i][j] === 0) {
            this.x0 = j;
            this.y0 = i;
          }
        }
      }
      res = this.search(0, -1, this.x0, this.y0);
      this.deepness = this.minPrevIteration;
      if (res) break;
    }
    return res;
  }

  checkResult() {
    if (this.idaStar()) {
      let i = 0;
      const inteval = setInterval(() => {
        const emptyChip = document.querySelector('[data-id="0"]');
        const neighbor = this.game.checkNeighbor(emptyChip);
        this.game.changeChip(Array.from(this.game.gameBoard.children)[neighbor[this.resultArr[i]]],
          emptyChip);
        i += 1;
        if (i === this.resultArr.length) {
          clearInterval(inteval);
        }
      }, 700);
    } else {
      console.log('IDA* failed');
    }
  }

  startAuto() {
    const arrChips = Array.from(document.querySelectorAll('[data-id]'));
    let count = 0;
    for (let i = 0; i < this.game.boardSize; i += 1) {
      for (let j = 0; j < this.game.boardSize; j += 1) {
        if (!this.board[i]) {
          this.board[i] = [];
        }
        this.board[i][j] = +arrChips[count].dataset.id;
        count += 1;
      }
    }

    this.createBoardGoal();
    this.checkChipPos();
    this.checkResult();
  }
}
