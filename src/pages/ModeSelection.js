import { useContext } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";

function ModeSelection() {
  const navigate = useNavigate();
  const { setPlayerMode, setMode } = useContext(GameContext);
  return (
    <div>
      <button
        onClick={() => {
          setPlayerMode("");
          navigate(-1);
        }}
      >
        Go Back
      </button>
      <button
        onClick={() => {
          setMode("easy");
          navigate("/game");
        }}
      >
        Easy Mode
      </button>
      <button
        onClick={() => {
          setMode("difficult");
          navigate("/game");
        }}
      >
        Difficult Mode
      </button>
    </div>
  );
}

export default ModeSelection;
