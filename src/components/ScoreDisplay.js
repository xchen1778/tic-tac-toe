import { useContext } from "react";
import GameContext from "../contexts/game.context";

function ScoreDisplay() {
  const { scores, playerMode, players, player, mainPlayer, gameOver } =
    useContext(GameContext);

  return (
    <div className="absolute left-14 bottom-8 flex flex-col gap-4">
      <div className="player-score flex justify-between items-center">
        <span
          className={`font-display text-creamwhite text-7xl transition-colors duration-300 ease-out ${
            player === mainPlayer && !gameOver ? "text-yellow" : ""
          }`}
        >
          {playerMode === "single" ? "you" : "p1"}
        </span>
        <span className="font-body text-creamwhite text-8xl">{`${
          scores[players[mainPlayer]]
        }`}</span>
      </div>
      <div className="player-score flex justify-between items-center">
        <span
          className={`font-display text-creamwhite text-7xl transition-colors duration-300 ease-out ${
            player !== mainPlayer && !gameOver ? "text-yellow" : ""
          }`}
        >
          {playerMode === "single" ? "ai" : "p2"}
        </span>
        <span className="font-body text-creamwhite text-8xl">
          {`${scores[mainPlayer === 0 ? "O" : "X"]}`}
        </span>
      </div>
    </div>
  );
}

export default ScoreDisplay;
