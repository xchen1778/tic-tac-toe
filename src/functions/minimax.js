import { checkResult } from "./checkResult";

function minimax(board, player) {
  const result = checkResult(board);
  if (result === "O") {
    return [1, null];
  } else if (result === "X") {
    return [-1, null];
  }

  let move, moveScore;
  if (player === "O") {
    [moveScore, move] = minimaxMaximize(board);
  } else if (player === "X") {
    [moveScore, move] = minimaxMinimize(board);
  }

  if (move === null) moveScore = 0;
  return [moveScore, move];
}

function minimaxMaximize(board) {
  let moveScore = -Infinity;
  let move = null;
  for (let i = 0; i < board.length; i++) {
    if (typeof board[i] === "number") {
      const newEntries = [...board];
      newEntries[i] = "O";
      const [newMoveScore, _newMove] = minimax(newEntries, "X");

      if (newMoveScore > moveScore) {
        move = i;
        moveScore = newMoveScore;
      }
    }
  }
  return [moveScore, move];
}

function minimaxMinimize(board) {
  let moveScore = 1000;
  let move = null;

  for (let i = 0; i < board.length; i++) {
    if (typeof board[i] === "number") {
      const newEntries = [...board];
      newEntries[i] = "X";
      const [newMoveScore, _newMove] = minimax(newEntries, "O");

      if (newMoveScore < moveScore) {
        move = i;
        moveScore = newMoveScore;
      }
    }
  }
  return [moveScore, move];
}

export { minimax };
