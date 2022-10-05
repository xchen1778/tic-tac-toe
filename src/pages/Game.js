import BackButton from "../components/BackButton";
import PlayerIndicator from "../components/PlayerIndicator";
import Board from "../components/Board";
import ActionButtons from "../components/ActionButtons";
import ScoreDisplay from "../components/ScoreDisplay";

function Game() {
  return (
    <div className="game">
      <BackButton />
      <PlayerIndicator />
      <Board />
      <ActionButtons />
      <ScoreDisplay />
    </div>
  );
}

export default Game;
