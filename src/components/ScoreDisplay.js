import { useContext } from "react";
import GameContext from "../contexts/game.context";

function ScoreDisplay() {
  const { endResult, scores } = useContext(GameContext);
  return (
    <div>
      <h1>
        {endResult === "Drew" || !endResult ? endResult : `${endResult} Wins!`}
      </h1>
      <h2>{`X: ${scores.X}`}</h2>
      <h2>{`O: ${scores.O}`}</h2>
      <h2>{`Drew: ${scores.Drew}`}</h2>
    </div>
  );
}

export default ScoreDisplay;
