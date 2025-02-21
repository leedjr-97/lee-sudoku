class SudokuBoard {
  constructor() {
    const baseBoard = generateBaseBoard();
    console.log("baseBoard: ", baseBoard);
    this.solution = solveBoard(baseBoard);
    this.board = baseBoard; //setPuzzleBoard(this.solution, 0);
  }

  getHint() {}

  checkPuzzle() {}

  setNumber(row, column, value) {
    const newNumber = parseInt(value);
    if (!isNaN(newNumber)) {
      this.board[row][column] = value;
      document.getElementById(`${row}-${column}-input`).value = value;
    } else {
      document.getElementById(`${row}-${column}-input`).value = "";
    }
  }
}
