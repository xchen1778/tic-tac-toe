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
  const [aiPrevMove, setAiPrevMove] = useState(0);

  function aiRandomMove(board, player, availSpots) {
    const randomNum = Math.floor(Math.random() * availSpots.length);
    const randomIndex = availSpots[randomNum];
    setAiPrevMove(randomIndex);
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
          if (aiPrevMove % 2 === 0) {
            const oddIndeices = availSpots.filter((spot) => spot % 2 !== 0);
            if (oddIndeices.length) {
              setAiPrevMove(oddIndeices[0]);
              newEntries[oddIndeices[0]] = players[player];
            } else {
              aiRandomMove(newEntries, player, availSpots);
            }
          } else {
            const evenIndeices = availSpots.filter((spot) => spot % 2 === 0);
            if (evenIndeices.length) {
              setAiPrevMove(evenIndeices[0]);
              newEntries[evenIndeices[0]] = players[player];
            } else {
              aiRandomMove(newEntries, player, availSpots);
            }
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
    <div className="board">
      {entries.map((entry, index) => (
        <Entry key={index} entry={entry} index={index} />
      ))}
    </div>
  );
}

export default Board;
