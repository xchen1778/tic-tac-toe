import { useContext } from "react";
import GameContext from "../contexts/game.context";

function PlayerIndicator() {
  const { player, gameOver } = useContext(GameContext);
  return (
    <div>
      <p className={player === true && !gameOver ? "active" : ""}>X</p>
      <p className={player === false && !gameOver ? "active" : ""}>O</p>
    </div>
  );
}

export default PlayerIndicator;
