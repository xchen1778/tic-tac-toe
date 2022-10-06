import { useContext } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";

function ModeSelection() {
  const navigate = useNavigate();
  const { mode, setMode, mainPlayer, setMainPlayer, resetBoard, setScores } =
    useContext(GameContext);

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/game");
  }

  return (
    <div>
      <button
        onClick={() => {
          resetBoard();
          setScores({ X: 0, O: 0, Drew: 0 });
          navigate(-1);
        }}
      >
        Go Back
      </button>

      <form onSubmit={handleSubmit}>
        <h2>Select A Mode:</h2>
        <div onChange={(e) => setMode(e.target.value)}>
          <input
            type="radio"
            name="mode"
            value="easy"
            id="mode1"
            defaultChecked
          />
          <label htmlFor="mode1">Easy</label>
          <input type="radio" name="mode" value="medium" id="mode2" />
          <label htmlFor="mode2">Medium</label>
          <input type="radio" name="mode" value="hard" id="mode3" />
          <label htmlFor="mode3">Hard</label>
        </div>
        <h2>Select A Player:</h2>
        <div onChange={(e) => setMainPlayer(parseInt(e.target.value))}>
          <input
            type="radio"
            name="playerMode"
            value={0}
            id="player1"
            defaultChecked
          />
          <label htmlFor="player1">X</label>
          <input type="radio" name="playerMode" value={1} id="player2" />
          <label htmlFor="player2">O</label>
        </div>
        <button>Start Game!</button>
      </form>
    </div>
  );
}

export default ModeSelection;
