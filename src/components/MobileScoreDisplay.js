import { useContext } from "react";
import GameContext from "../contexts/game.context";

function ScoreDisplay() {
  const { scores, playerMode, players, player, mainPlayer, gameOver } =
    useContext(GameContext);

  return (
    <div className="flex flex-col gap-4 w-screen md:hidden absolute top-40">
      <div className="mobile-play-score flex justify-between items-center px-12">
        <span
          className={`font-display text-creamwhite text-6xl transition-colors duration-300 ease-out ${
            player === mainPlayer && !gameOver ? "active" : ""
          }`}
        >
          {playerMode === "single" ? "you" : "p1"}
        </span>
        <span className="font-body text-creamwhite text-7xl">{`${
          scores[players[mainPlayer]]
        }`}</span>
      </div>
      <div className="mobile-play-score flex justify-between items-center px-12">
        <span
          className={`font-display text-creamwhite text-6xl transition-colors duration-300 ease-out ${
            player !== mainPlayer && !gameOver ? "active" : ""
          }`}
        >
          {playerMode === "single" ? "ai" : "p2"}
        </span>
        <span className="font-body text-creamwhite text-7xl">
          {`${scores[mainPlayer === 0 ? "O" : "X"]}`}
        </span>
      </div>
    </div>
  );
}

export default ScoreDisplay;
