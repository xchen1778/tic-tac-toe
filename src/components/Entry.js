import { useContext } from "react";
import GameContext from "../contexts/game.context";

function Entry({ entry, index }) {
  const {
    entries,
    setEntries,
    setPlayer,
    moves,
    setMoves,
    checkResult,
    gameOver,
    winningIndeices,
  } = useContext(GameContext);

  function handleClick() {
    const newEntries = [...entries];
    newEntries[index] = "X";
    setEntries(newEntries);
    checkResult("X", newEntries);
    setMoves(moves + 1);
    setPlayer("O");
  }

  return (
    <button
      onClick={handleClick}
      disabled={entry === "X" || entry === "O" || gameOver}
      className={winningIndeices.includes(index) ? "winner" : ""}
    >
      {entry === "X" || entry === "O" ? entry : ""}
    </button>
  );
}

export default Entry;
