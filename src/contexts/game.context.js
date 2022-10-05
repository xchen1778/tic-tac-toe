import { createContext, useState } from "react";

const GameContext = createContext();

export function GameContextProvider({ children }) {
  const beginningBoard = Array.from(Array(9).keys());
  const [entries, setEntries] = useState(beginningBoard);
  const [player, setPlayer] = useState("X");
  const [moves, setMoves] = useState(0);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [winningIndeices, setWinningIndeices] = useState([]);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkResult(player, newEntries) {
    let allPlayerPositions = [];
    for (let i = 0; i < newEntries.length; i++) {
      if (newEntries[i] === player) {
        allPlayerPositions.push(i);
      }
    }

    for (let combo of winningCombos) {
      if (combo.every((index) => allPlayerPositions.includes(index))) {
        setWinningIndeices(combo);
        setResult(player);
        setGameOver(true);
        return;
      }
    }

    if (moves === 8) {
      setResult("Draw");
      setGameOver(true);
      return;
    }
  }

  return (
    <GameContext.Provider
      value={{
        entries,
        setEntries,
        player,
        setPlayer,
        moves,
        setMoves,
        result,
        setResult,
        gameOver,
        setGameOver,
        winningIndeices,
        setWinningIndeices,
        checkResult,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
