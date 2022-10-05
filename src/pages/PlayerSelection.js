import { useContext } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";

function PlayerSelection() {
  const navigate = useNavigate();
  const { setPlayerMode } = useContext(GameContext);
  return (
    <div>
      <button
        onClick={() => {
          setPlayerMode("single");
          navigate("/mode-selection");
        }}
      >
        Single Player
      </button>
      <button
        onClick={() => {
          setPlayerMode("multi");
          navigate("/game");
        }}
      >
        Local Multiplayers
      </button>
    </div>
  );
}

export default PlayerSelection;
