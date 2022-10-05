import { winningCombos } from "../constants/winningCombos";

function checkResult(board) {
  let allXPositions = [];
  let allOPositions = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "X") {
      allXPositions.push(i);
    }
    if (board[i] === "O") {
      allOPositions.push(i);
    }
  }
  for (let combo of winningCombos) {
    if (combo.every((index) => allXPositions.includes(index))) {
      return "X";
    }
    if (combo.every((index) => allOPositions.includes(index))) {
      return "O";
    }
  }

  if (board.every((entry) => entry === "X" || entry === "O")) {
    return "Draw";
  }

  return "Continue";
}

export { checkResult };
