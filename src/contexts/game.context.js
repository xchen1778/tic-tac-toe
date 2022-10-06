import { createContext, useState } from "react";
import { emptyBoard } from "../constants/emptyBoard";
import { winningCombos } from "../constants/winningCombos";

const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [playerMode, setPlayerMode] = useState("single");
  const [mode, setMode] = useState("easy");
  const [entries, setEntries] = useState(emptyBoard);
  const [player, setPlayer] = useState(true);
  const [count, setCount] = useState(0);
  const [endResult, setEndResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [winningIndeices, setWinningIndeices] = useState([]);
  const [scores, setScores] = useState({ X: 0, O: 0, Drew: 0 });

  function checkEndResult(board, player) {
    let allPositions = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i] === player) {
        allPositions.push(i);
      }
    }
    for (let combo of winningCombos) {
      if (combo.every((index) => allPositions.includes(index))) {
        setWinningIndeices(combo);
        setEndResult(player);
        setGameOver(true);
        setScores((scores) => {
          scores[player] += 1;
          return scores;
        });
        return;
      }
    }

    if (count === 8) {
      setEndResult("Drew");
      setGameOver(true);
      setScores((scores) => {
        scores.Drew += 1;
        return scores;
      });
    }
  }

  function resetBoard() {
    setGameOver(false);
    setPlayer(true);
    setEntries(emptyBoard);
    setWinningIndeices([]);
    setEndResult("");
    setCount(0);
  }

  return (
    <GameContext.Provider
      value={{
        playerMode,
        setPlayerMode,
        mode,
        setMode,
        emptyBoard,
        entries,
        setEntries,
        player,
        setPlayer,
        count,
        setCount,
        endResult,
        setEndResult,
        gameOver,
        setGameOver,
        winningIndeices,
        setWinningIndeices,
        scores,
        setScores,
        checkEndResult,
        resetBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
