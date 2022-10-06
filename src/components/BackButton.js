import { useContext } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const { resetBoard, setScores } = useContext(GameContext);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        resetBoard();
        setScores({ X: 0, O: 0, Drew: 0 });
        navigate(-1);
      }}
    >
      Go Back
    </button>
  );
}

export default BackButton;
