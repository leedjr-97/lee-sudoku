function generateBaseBoard() {
  const newBoard = new Array(9);

  for (let i = 0; i < 9; i++) {
    newBoard[i] = new Array(9).fill(-1);
  }

  const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 9; i++) {
    let numIndex = Math.floor(Math.random() * possibleNumbers.length);
    newBoard[0][i] = possibleNumbers[numIndex];
    possibleNumbers.splice(numIndex, 1);
  }

  return newBoard;
}

function solveBoard(baseBoard) {}

function setPuzzleBoard(solvedBoard, difficulty) {}
