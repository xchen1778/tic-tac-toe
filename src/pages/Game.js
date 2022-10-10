import { useContext, useState } from "react";
import ActionButtons from "../components/ActionButtons";
import Board from "../components/Board";
import AgainScreen from "../components/AgainScreen";
import ScoreDisplay from "../components/ScoreDisplay";
import GameContext from "../contexts/game.context";
import MobileScoreDisplay from "../components/MobileScoreDisplay";

function Game() {
  const { gameOver } = useContext(GameContext);
  const [fadeOutAgain, setFadeOutAgain] = useState(false);
  const [slideOutFull, setSlideOutFull] = useState(false);
  const [textHidden, setTextHidden] = useState(false);
  return (
    <div>
      <div
        className={`absolute top-0 left-0 z-20 h-screen w-screen md:w-8/12 bg-yellow flex flex-col justify-center items-center ${
          slideOutFull ? "slideOutFull" : ""
        }`}
      >
        <ActionButtons
          setFadeOutAgain={setFadeOutAgain}
          setSlideOutFull={setSlideOutFull}
          setTextHidden={setTextHidden}
        />
        <MobileScoreDisplay />
        <Board />
        {gameOver && (
          <AgainScreen
            fadeOutAgain={fadeOutAgain}
            setFadeOutAgain={setFadeOutAgain}
          />
        )}
      </div>
      <div
        className={`absolute right-0 top-0 h-screen w-4/12 fadeIn ${
          textHidden ? "hidden" : ""
        }`}
      >
        <h1 className="font-display text-4xl leading-1 text-yellow absolute left-12 top-10">
          tic
          <br />
          tac
          <br />
          toe
        </h1>
        <ScoreDisplay />
      </div>
    </div>
  );
}

export default Game;
