import { useContext } from "react";
import GameContext from "../contexts/game.context";

function ScoreDisplay() {
  const { scores, playerMode, players, player, mainPlayer, gameOver } =
    useContext(GameContext);

  return (
    <div>
      <span className={player === mainPlayer && !gameOver ? "active" : ""}>
        {playerMode === "single" ? "You" : "Player 1"}
      </span>
      <span>{`${scores[players[mainPlayer]]} VS ${
        scores[mainPlayer === 0 ? "O" : "X"]
      }`}</span>
      <span className={player !== mainPlayer && !gameOver ? "active" : ""}>
        {playerMode === "single" ? "AI" : "Player 2"}
      </span>
    </div>
  );
}

export default ScoreDisplay;
