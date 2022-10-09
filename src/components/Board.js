import { useContext, useEffect, useState } from "react";
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
  const [minimaxSwitch, setMinimaxSwitch] = useState(0);

  function aiRandomMove(board, player, availSpots) {
    const randomNum = Math.floor(Math.random() * availSpots.length);
    const randomIndex = availSpots[randomNum];
    board[randomIndex] = players[player];
  }

  function nextTurn(board) {
    setEntries(board);
    checkEndResult(board, players[player]);
    setCount((count) => count + 1);
    setPlayer(player === 0 ? 1 : 0);
  }

  // AI playing
  useEffect(() => {
    if (playerMode === "single") {
      setTimeout(() => {
        if (!gameOver && player !== mainPlayer && mode === "easy") {
          const availSpots = entries.filter(
            (entry) => entry !== "X" && entry !== "O"
          );
          const newEntries = [...entries];
          aiRandomMove(newEntries, player, availSpots);
          nextTurn(newEntries);
        } else if (!gameOver && player !== mainPlayer && mode === "medium") {
          const availSpots = entries.filter(
            (entry) => entry !== "X" && entry !== "O"
          );
          const newEntries = [...entries];
          if (minimaxSwitch < 2) {
            const [_nextMoveScore, nextMove] = minimax(
              newEntries,
              players[player]
            );
            newEntries[nextMove] = players[player];
            setMinimaxSwitch(minimaxSwitch + 1);
          } else {
            aiRandomMove(newEntries, player, availSpots);
            setMinimaxSwitch(0);
          }
          nextTurn(newEntries);
        } else if (!gameOver && player !== mainPlayer && mode === "hard") {
          const newEntries = [...entries];
          const [_nextMoveScore, nextMove] = minimax(
            newEntries,
            players[player]
          );
          newEntries[nextMove] = players[player];
          nextTurn(newEntries);
        }
      }, 300);
    }
  }, [player, gameOver]);

  return (
    <div className="mt-8 grid grid-rows-3 grid-cols-3 board fadeIn">
      {entries.map((entry, index) => (
        <Entry key={index} entry={entry} index={index} />
      ))}
    </div>
  );
}

export default Board;
