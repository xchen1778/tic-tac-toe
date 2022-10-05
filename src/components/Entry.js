import { useContext } from "react";
import GameContext from "../contexts/game.context";

function Entry({ entry, index }) {
  const {
    playerMode,
    entries,
    setEntries,
    player,
    setPlayer,
    checkEndResult,
    winningIndeices,
    gameOver,
    setCount,
  } = useContext(GameContext);

  // Human Playing
  function handleClick() {
    const newEntries = [...entries];
    newEntries[index] = player ? "X" : "O";
    setEntries(newEntries);
    checkEndResult(newEntries, player ? "X" : "O");
    setCount((count) => count + 1);
    setPlayer(!player);
  }

  return (
    <button
      onClick={handleClick}
      disabled={
        entry === "X" ||
        entry === "O" ||
        gameOver ||
        (player === false && playerMode === "single")
      }
      className={winningIndeices.includes(index) ? "winner" : ""}
    >
      {entry === "X" || entry === "O" ? entry : ""}
    </button>
  );
}

export default Entry;
