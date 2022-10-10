import { useContext, useEffect } from "react";
import GameContext from "../contexts/game.context";
import ReplayIcon from "@mui/icons-material/Replay";

function AgainScreen({ fadeOutAgain, setFadeOutAgain }) {
  const { resetBoard, players, mainPlayer, playerMode, endResult } =
    useContext(GameContext);

  function handleAgain() {
    setFadeOutAgain(true);
    setTimeout(() => {
      resetBoard();
      setFadeOutAgain(false);
    }, 300);
  }

  function resultMessage(result) {
    switch (result) {
      case "":
        return "";
      case "Drew":
        return "drew!";
      case players[mainPlayer]:
        return playerMode === "single" ? "you won!" : "p1 won!";
      default:
        return playerMode === "single" ? "you lost!" : "p2 won!";
    }
  }

  return (
    <div
      className={`absolute top-0 left-0 z-30 h-screen w-full flex flex-col justify-center items-center backdrop-blur-sm againscreen ${
        fadeOutAgain ? "fadeOut2" : "fadeIn2"
      }`}
    >
      <div className="font-sans text-dark text-6xl md:text-8xl message">
        {resultMessage(endResult)}
      </div>
      <button
        className="font-sans bg-creamwhite text-dark  text-2xl rounded-full flex items-center gap-2 hover:bg-dark hover:text-creamwhite back-button transition-colors duration-300 ease-out absolute  bottom-28 md:bottom-10 againbutton"
        onClick={handleAgain}
      >
        <ReplayIcon /> again
      </button>
    </div>
  );
}

export default AgainScreen;
