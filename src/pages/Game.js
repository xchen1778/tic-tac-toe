import BackButton from "../components/BackButton";
import Board from "../components/Board";
import ActionButtons from "../components/ActionButtons";
import ScoreDisplay from "../components/ScoreDisplay";
import ResultMessage from "../components/ResultMessage";

function Game() {
  return (
    <div className="game">
      <BackButton />
      <ScoreDisplay />
      <Board />
      <ActionButtons />
      <ResultMessage />
    </div>
  );
}

export default Game;
