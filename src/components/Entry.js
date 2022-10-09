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
      className={`border-4 border-solid border-yellow bg-verylightyellow transition-all duration-300 ease-out font-text text-9xl text-darkyellow pt-6 enabled:hover:bg-solightyellow entry ${
        winningIndeices.includes(index) ? "bg-creamwhite" : ""
      }`}
    >
      {entry === "X" || entry === "O" ? entry : ""}
    </button>
  );
}

export default Entry;
