import { useContext, useEffect } from "react";
import GameContext from "../contexts/game.context";
import Entry from "./Entry";

function Board() {
  const {
    player,
    entries,
    setEntries,
    checkResult,
    moves,
    setMoves,
    setPlayer,
    result,
  } = useContext(GameContext);

  function emptyEntries(board) {
    return board.filter((entry) => entry !== "X" && entry !== "O");
  }

  useEffect(() => {
    if (player === "O") {
      // O plays here
      const availSpots = emptyEntries(entries);
      let randomNum = Math.floor(Math.random() * availSpots.length);
      const newEntries = [...entries];
      newEntries[availSpots[randomNum]] = "O";
      setEntries(newEntries);
      checkResult("O", newEntries);
      setMoves(moves + 1);
      setPlayer("X");
    }
  }, [player]);

  return (
    <div className="board">
      {entries.map((entry, index) => (
        <Entry key={index} entry={entry} index={index} />
      ))}
      <h1>{result}</h1>
    </div>
  );
}

export default Board;
