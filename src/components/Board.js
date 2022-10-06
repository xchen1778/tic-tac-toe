import { useContext, useEffect } from "react";
import GameContext from "../contexts/game.context";
import { minimax } from "../functions/minimax";
import Entry from "./Entry";

function Board() {
  const {
    playerMode,
    mode,
    mainPlayer,
    players,
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
        if (!gameOver && player !== mainPlayer && mode === "easy") {
          console.log("ai");
          const availSpots = entries.filter(
            (entry) => entry !== "X" && entry !== "O"
          );
          const randomNum = Math.floor(Math.random() * availSpots.length);
          const randomIndex = availSpots[randomNum];
          const newEntries = [...entries];
          newEntries[randomIndex] = players[player];
          setEntries(newEntries);
          checkEndResult(newEntries, players[player]);
          setCount((count) => count + 1);
          setPlayer(player === 0 ? 1 : 0);
        } else if (!gameOver && player !== mainPlayer && mode === "hard") {
          const newEntries = [...entries];
          const [_nextMoveScore, nextMove] = minimax(
            newEntries,
            players[player]
          );
          newEntries[nextMove] = players[player];
          setEntries(newEntries);
          checkEndResult(newEntries, players[player]);
          setCount((count) => count + 1);
          setPlayer(player === 0 ? 1 : 0);
        }
      }, 300);
    }
  }, [player, gameOver]);

  return (
    <div className="board">
      {entries.map((entry, index) => (
        <Entry key={index} entry={entry} index={index} />
      ))}
    </div>
  );
}

export default Board;
