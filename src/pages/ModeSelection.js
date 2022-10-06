import { useContext } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";

function ModeSelection() {
  const navigate = useNavigate();
  const { setMode, setMainPlayer, resetBoard, setScores } =
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
          <input type="radio" name="mode" value="hard" id="mode2" />
          <label htmlFor="mode2">Hard</label>
        </div>
        <h2>Select A Player:</h2>
        <div onChange={(e) => setMainPlayer(parseInt(e.target.value))}>
          <input
            type="radio"
            name="playerMode"
            value={0}
            id="playerMode1"
            defaultChecked
          />
          <label htmlFor="playerMode1">X</label>
          <input type="radio" name="playerMode" value={1} id="playerMode2" />
          <label htmlFor="playerMode2">O</label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ModeSelection;
