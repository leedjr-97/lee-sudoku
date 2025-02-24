class SudokuBoard {
  constructor(difficulty) {
    const baseBoard = generateBaseBoard();
    this.solution = solveBoard(baseBoard);
    this.startingBoard = setPuzzleBoard(this.solution, difficulty);
    this.board = this.startingBoard.map((row) => row.slice());

    this.difficulty = difficulty;
    this.numberOfEmptySpaces = getDifficulty(difficulty);
    this.timer = new Timer();
  }

  getHint() {
    const emptySpaces = [];
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === -1) {
          emptySpaces.push({
            i: i,
            j: j,
          });
        }
      }
    }

    const randomEmptyCoordinates =
      emptySpaces[Math.floor(Math.random() * emptySpaces.length)];
    const randomSpace = document.getElementById(
      `${randomEmptyCoordinates.i}-${randomEmptyCoordinates.j}-input`
    );
    const hint =
      this.solution[randomEmptyCoordinates.i][randomEmptyCoordinates.j];

    randomSpace.value = hint;
    randomSpace.style.color = "purple";
    this.board[randomEmptyCoordinates.i][randomEmptyCoordinates.j] = hint;
  }

  checkPuzzle(checkingForCompletion) {
    let result = true;
    // We don't compare to our solution in case there is more than one
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.board[i][j] !== -1 && this.startingBoard[i][j] === -1) {
          if (verifyCoord(this.board, i, j)) {
            if (!checkingForCompletion) {
              document.getElementById(`${i}-${j}-input`).style.border =
                "solid 1px green";
            }
          } else {
            document.getElementById(`${i}-${j}-input`).style.border =
              "solid 1px red";
            result = false;
          }
        }
      }
    }

    return result;
  }

  showSolution() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        document.getElementById(`${i}-${j}-input`).value = this.solution[i][j];
        if (this.startingBoard[i][j] !== -1) {
          document.getElementById(`${i}-${j}-input`).style.color = "gold";
        } else if (this.solution[i][j] === this.board[i][j]) {
          document.getElementById(`${i}-${j}-input`).style.color = "green";
        } else {
          document.getElementById(`${i}-${j}-input`).style.color = "red";
        }
      }
    }
  }

  setNumber(row, column, value) {
    const newNumber = parseInt(value);
    if (!isNaN(newNumber)) {
      if (this.board[row][column] === -1) {
        this.numberOfEmptySpaces--;
      }
      this.board[row][column] = newNumber;
      document.getElementById(`${row}-${column}-input`).value = value;
      document.getElementById(`${row}-${column}-input`).style.border = "none";

      if (this.numberOfEmptySpaces === 0) {
        const isComplete = this.checkPuzzle(true);
        if (isComplete) {
          this.timer.removeInterval();
          completePuzzle();
        }
      }
    } else {
      this.numberOfEmptySpaces++;
      this.board[row][column] = -1;
      document.getElementById(`${row}-${column}-input`).value = "";
      document.getElementById(`${row}-${column}-input`).style.border = "none";
    }
  }

  resetBoard() {
    this.timer.removeInterval();

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        const old_element = document.getElementById(`${i}-${j}-input`);
        const new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
      }
    }
  }

  getCompletionTime() {
    return this.timer.getTime();
  }
}
