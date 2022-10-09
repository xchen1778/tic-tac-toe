import { useContext, useState } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ModeSelection from "../components/ModeSelection";

function PlayerSelection() {
  const navigate = useNavigate();
  const { setMove, setPlayerMode, setPlayer, setMainPlayer } =
    useContext(GameContext);
  const [unmountingFirstSlide, setUnmountingFirstSlide] = useState(false);
  const [mountSecondSlide, setMountSecondSlide] = useState(false);
  const [slideToGame, setSlideToGame] = useState(false);
  return (
    <div>
      <h1 className="font-display text-10xl leading-1 text-yellow absolute left-24 bottom-16">
        tic
        <br />
        tac
        <br />
        toe
      </h1>

      <div
        className={`font-sans bg-yellow absolute right-0 w-7/12 h-screen z-10 pl-32 text-dark slideIn ${
          unmountingFirstSlide ? "slideOut" : ""
        } ${slideToGame ? "slidetoleft" : ""}`}
      >
        <button
          className=" bg-lightyellow self-start text-3xl rounded-full flex items-center gap-8 hover:bg-creamwhite back-button transition-colors duration-300 ease-out absolute top-10"
          onClick={() => {
            setUnmountingFirstSlide(true);
            setTimeout(() => {
              navigate(-1);
              setMove(false);
            }, 500);
          }}
        >
          <HomeIcon />
        </button>
        <h2 className="text-7xl absolute top-48">
          chose <br /> play mode。
        </h2>
        <div className="flex flex-col gap-8 absolute bottom-20">
          <button
            className=" bg-lightyellow self-start text-3xl rounded-full flex items-center gap-8 hover:bg-creamwhite slide-button transition-colors duration-300 ease-out"
            onClick={() => {
              setPlayerMode("single");
              setMountSecondSlide(true);
            }}
          >
            with ai
          </button>
          <button
            className=" bg-lightyellow self-start text-3xl rounded-full flex items-center gap-8 hover:bg-creamwhite slide-button transition-colors duration-300 ease-out"
            onClick={() => {
              setSlideToGame(true);
              setTimeout(() => {
                setPlayerMode("multi");
                setPlayer(0);
                setMainPlayer(0);
                navigate("/game");
              }, 400);
            }}
          >
            with a friend
          </button>
        </div>
      </div>

      {mountSecondSlide && (
        <ModeSelection
          setMountSecondSlide={setMountSecondSlide}
          slideToGame={slideToGame}
          setSlideToGame={setSlideToGame}
        />
      )}
    </div>
  );
}

export default PlayerSelection;
