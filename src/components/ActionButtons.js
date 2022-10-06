import { useContext } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";

function ActionButtons() {
  const { resetBoard, setScores, setPlayerMode, setMode } =
    useContext(GameContext);
  const navigate = useNavigate();

  function handleRestart() {
    resetBoard();
    setScores({ X: 0, O: 0, Drew: 0 });
    navigate("/");
  }

  function handleResetScore() {
    resetBoard();
    setScores({ X: 0, O: 0, Drew: 0 });
  }

  function handleAgain() {
    resetBoard();
  }

  return (
    <div>
      <button onClick={handleRestart}>Restart Game</button>
      <button onClick={handleAgain}>Compete Again</button>
      <button onClick={handleResetScore}>Reset Score</button>
    </div>
  );
}

export default ActionButtons;
