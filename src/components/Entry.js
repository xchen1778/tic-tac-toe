import { useContext } from "react";
import GameContext from "../contexts/game.context";

function Entry({ entry, index }) {
  const {
    playerMode,
    entries,
    setEntries,
    mainPlayer,
    players,
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
    newEntries[index] = players[player];
    setEntries(newEntries);
    checkEndResult(newEntries, players[player]);
    setCount((count) => count + 1);
    setPlayer(player === 0 ? 1 : 0);
  }

  return (
    <button
      onClick={handleClick}
      disabled={
        entry === "X" ||
        entry === "O" ||
        gameOver ||
        (player !== mainPlayer && playerMode === "single")
      }
      className={winningIndeices.includes(index) ? "winner" : ""}
    >
      {entry === "X" || entry === "O" ? entry : ""}
    </button>
  );
}

export default Entry;
