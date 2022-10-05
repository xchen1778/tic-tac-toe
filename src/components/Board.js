import { useContext, useEffect } from "react";
import GameContext from "../contexts/game.context";
import { minimax } from "../functions/minimax";
import Entry from "./Entry";

function Board() {
  const {
    playerMode,
    mode,
    player,
    entries,
    setEntries,
    checkEndResult,
    setPlayer,
    setCount,
    gameOver,
  } = useContext(GameContext);

  // AI playing
  useEffect(() => {
    if (playerMode === "single") {
      setTimeout(() => {
        if (!gameOver && player === false && mode === "easy") {
          const availSpots = entries.filter(
            (entry) => entry !== "X" && entry !== "O"
          );
          const randomNum = Math.floor(Math.random() * availSpots.length);
          const randomIndex = availSpots[randomNum];
          const newEntries = [...entries];
          newEntries[randomIndex] = "O";
          setEntries(newEntries);
          checkEndResult(newEntries, "O");
          setCount((count) => count + 1);
          setPlayer(!player);
        } else if (!gameOver && player === false && mode === "difficult") {
          const newEntries = [...entries];
          const [_nextMoveScore, nextMove] = minimax(newEntries, "O");
          newEntries[nextMove] = "O";
          setEntries(newEntries);
          checkEndResult(newEntries, "O");
          setCount((count) => count + 1);
          setPlayer(!player);
        }
      }, 500);
    }
  }, [player]);

  return (
    <div className="board">
      {entries.map((entry, index) => (
        <Entry key={index} entry={entry} index={index} />
      ))}
    </div>
  );
}

export default Board;
