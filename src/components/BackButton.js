import { useContext } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const { playerMode, setMode, setMainPlayer, resetBoard, setScores } =
    useContext(GameContext);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        resetBoard();
        setScores({ X: 0, O: 0, Drew: 0 });
        if (playerMode === "single") {
          setMode("easy");
          setMainPlayer(0);
        }
        navigate(-1);
      }}
    >
      Go Back
    </button>
  );
}

export default BackButton;
