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

function getColumn(board, column) {
  const returnedColumn = [];

  for (let i = 0; i < board.length; i++) {
    returnedColumn.push(board[i][column]);
  }

  return returnedColumn;
}

function getGrid(board, row, column) {
  // Row 1
  if (row >= 0 && row <= 2 && column >= 0 && column <= 2) {
    const row1 = [board[0][0], board[0][1], board[0][2]];
    const row2 = [board[1][0], board[1][1], board[1][2]];
    const row3 = [board[2][0], board[2][1], board[2][2]];
    return [row1, row2, row3];
  }

  if (row >= 0 && row <= 2 && column >= 3 && column <= 5) {
    const row1 = [board[0][3], board[0][4], board[0][5]];
    const row2 = [board[1][3], board[1][4], board[1][5]];
    const row3 = [board[2][3], board[2][4], board[2][5]];
    return [row1, row2, row3];
  }

  if (row >= 0 && row <= 2 && column >= 6 && column <= 8) {
    const row1 = [board[0][6], board[0][7], board[0][8]];
    const row2 = [board[1][6], board[1][7], board[1][8]];
    const row3 = [board[2][6], board[2][7], board[2][8]];
    return [row1, row2, row3];
  }

  // Row 2
  if (row >= 3 && row <= 5 && column >= 0 && column <= 2) {
    const row1 = [board[3][0], board[3][1], board[3][2]];
    const row2 = [board[4][0], board[4][1], board[4][2]];
    const row3 = [board[5][0], board[5][1], board[5][2]];
    return [row1, row2, row3];
  }

  if (row >= 3 && row <= 5 && column >= 3 && column <= 5) {
    const row1 = [board[3][3], board[3][4], board[3][5]];
    const row2 = [board[4][3], board[4][4], board[4][5]];
    const row3 = [board[5][3], board[5][4], board[5][5]];
    return [row1, row2, row3];
  }

  if (row >= 3 && row <= 5 && column >= 6 && column <= 8) {
    const row1 = [board[3][6], board[3][7], board[3][8]];
    const row2 = [board[4][6], board[4][7], board[4][8]];
    const row3 = [board[5][6], board[5][7], board[5][8]];
    return [row1, row2, row3];
  }

  // Row 3
  if (row >= 6 && row <= 8 && column >= 0 && column <= 2) {
    const row1 = [board[6][0], board[6][1], board[6][2]];
    const row2 = [board[7][0], board[7][1], board[7][2]];
    const row3 = [board[8][0], board[8][1], board[8][2]];
    return [row1, row2, row3];
  }

  if (row >= 6 && row <= 8 && column >= 3 && column <= 5) {
    const row1 = [board[6][3], board[6][4], board[6][5]];
    const row2 = [board[7][3], board[7][4], board[7][5]];
    const row3 = [board[8][3], board[8][4], board[8][5]];
    return [row1, row2, row3];
  }

  if (row >= 6 && row <= 8 && column >= 6 && column <= 8) {
    const row1 = [board[6][6], board[6][7], board[6][8]];
    const row2 = [board[7][6], board[7][7], board[7][8]];
    const row3 = [board[8][6], board[8][7], board[8][8]];
    return [row1, row2, row3];
  }

  return -1;
}

function verifyCoord(board, row, column) {
  const value = board[row][column];

  let verified = true;

  // Check row
  board[row].forEach((item, index) => {
    if (index !== column) {
      if (item === value) {
        verified = false;
      }
    }
  });
  if (!verified) {
    return false;
  }

  // Check Column
  const columns = getColumn(board, column);
  columns.forEach((item, index) => {
    if (index !== row) {
      if (item === value) {
        verified = false;
      }
    }
  });
  if (!verified) {
    return false;
  }

  // Check Block
  const grid = getGrid(board, row, column);
  if (grid === -1) {
    console.log("something went wrong");
    return false;
  }

  let numCount = 0;
  grid.forEach((gridRow, rowIndex) => {
    gridRow.forEach((gridCol, colIndex) => {
      if (gridCol === value) {
        //   verified = false;
        numCount++;
      }
    });
  });
  if (numCount > 1) {
    return false;
  }

  return true;
}
function solveBoard(baseBoard) {
  const solvedBoard = [];
  baseBoard.forEach((row, index) => {
    solvedBoard[index] = row.slice();
  });

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (solvedBoard[i][j] === -1) {
        const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let index = 1; index < 10; index++) {
          let numIndex = Math.floor(Math.random() * possibleNumbers.length);
          solvedBoard[i][j] = possibleNumbers[numIndex];

          if (verifyCoord(solvedBoard, i, j)) {
            const solution = solveBoard(solvedBoard);
            if (solution !== -1) {
              return solution;
            }
            solvedBoard[i][j] = -1;
          }
          possibleNumbers.splice(numIndex, 1);
        }
        return -1;
      }
    }
  }

  return solvedBoard;
}

function generatePossiblePositions() {
  const cellPositions = [];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      cellPositions.push([i, j]);
    }
  }

  let index = cellPositions.length; // 81
  while (index != 0) {
    const randomIndex = Math.floor(Math.random() * index);
    index--;

    const numberOne = cellPositions[index].slice();
    const numberTwo = cellPositions[randomIndex].slice();
    cellPositions[randomIndex] = numberOne;
    cellPositions[index] = numberTwo;
  }

  return cellPositions;
}
function getDifficulty(difficulty) {
  switch (difficulty) {
    case "easy":
      return;
  }
}
function setPuzzleBoard(solvedBoard, difficulty) {
  const possiblePositions = generatePossiblePositions();

  const permeableBoard = [];
  solvedBoard.forEach((row, index) => {
    permeableBoard[index] = row.slice();
  });

  for (let i = 0; i < 17; i++) {
    const row = possiblePositions[i][0];
    const col = possiblePositions[i][1];

    permeableBoard[row][col] = -1;
  }

  return permeableBoard;
}

function here() {
  console.log("here");
}
