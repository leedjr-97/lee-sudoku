class SudokuBoard {
  constructor() {
    const baseBoard = generateBaseBoard();
    console.log("baseBoard: ", baseBoard);
    this.solution = solveBoard(baseBoard);
    console.log("solution: ", this.solution);
    this.board = baseBoard; //setPuzzleBoard(this.solution, 0);
  }

  getHint() {}

  checkPuzzle() {}

  showSolution() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        document.getElementById(`${i}-${j}-input`).value = this.solution[i][j];
        if (this.solution[i][j] === this.board[i][j]) {
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
      this.board[row][column] = newNumber;
      document.getElementById(`${row}-${column}-input`).value = value;

      const test = verifyCoord(this.board, row, column);
      console.log("test: ", test);
    } else {
      document.getElementById(`${row}-${column}-input`).value = "";
    }
  }
}
