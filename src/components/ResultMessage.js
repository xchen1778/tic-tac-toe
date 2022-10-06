import { useContext } from "react";
import GameContext from "../contexts/game.context";

function ResultMessage() {
  const { playerMode, players, mainPlayer, endResult } =
    useContext(GameContext);

  function resultMessage(result) {
    switch (result) {
      case "":
        return "";
      case "Drew":
        return "Drew!";
      case players[mainPlayer]:
        return playerMode === "single" ? "You won!" : "Player 1 won!";
      default:
        return playerMode === "single" ? "You lost!" : "Player 2 won!";
    }
  }

  return <div>{resultMessage(endResult)}</div>;
}

export default ResultMessage;
