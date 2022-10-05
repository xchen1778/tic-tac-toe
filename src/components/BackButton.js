import { useContext } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const { playerMode, setPlayerMode, setMode, resetBoard, setScores } =
    useContext(GameContext);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (playerMode === "single") {
          setMode("");
        } else if (playerMode === "multi") {
          setPlayerMode("");
        }
        resetBoard();
        setScores({ X: 0, O: 0, Drew: 0 });
        navigate(-1);
      }}
    >
      {playerMode === "single" ? "Switch Mode" : "Go Back"}
    </button>
  );
}

export default BackButton;
