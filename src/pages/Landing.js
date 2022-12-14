import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../contexts/game.context";

function Landing() {
  const { move, setMove } = useContext(GameContext);
  const navigate = useNavigate();
  const [unmounting, setUnmounting] = useState(false);

  useEffect(() => {
    setMove(false);
    window.localStorage.setItem("backgroundText", JSON.stringify(move));
    setTimeout(() => {
      setUnmounting(true);
    }, 500);
  }, []);

  return (
    <>
      {!unmounting && (
        <div className="w-screen h-screen bg-verydark absolute top-0 blackscreen"></div>
      )}
      <div
        onClick={() => {
          if (!move) {
            setMove(true);
            navigate("/player-selection");
          }
        }}
      >
        <h1 className="font-display text-9xl lg:text-10xl leading-1 text-yellow absolute left-16 lg:left-24 bottom-12 lg:bottom-16">
          tic
          <br />
          tac
          <br />
          toe
        </h1>
        <p className="font-body text-sm lg:text-base text-offwhite w-40 absolute ml-16 lg:right-24 top-24 fadeIn">
          click anywhere to start the game!
        </p>
      </div>
    </>
  );
}

export default Landing;
