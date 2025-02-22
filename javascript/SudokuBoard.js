class SudokuBoard {
  constructor() {
    const baseBoard = generateBaseBoard();
    console.log("baseBoard: ", baseBoard);
    this.solution = solveBoard(baseBoard);
    console.log("solution: ", this.solution);
    this.startingBoard = setPuzzleBoard(this.solution, 0);
    this.board = this.startingBoard.map((row) => row.slice());
  }

  getHint() {}

  checkPuzzle() {}

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
      this.board[row][column] = newNumber;
      document.getElementById(`${row}-${column}-input`).value = value;
    } else {
      document.getElementById(`${row}-${column}-input`).value = "";
    }
  }
}
