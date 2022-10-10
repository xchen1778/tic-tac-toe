import { useContext, useState } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ModeSelection({ setMountSecondSlide, slideToGame, setSlideToGame }) {
  const navigate = useNavigate();
  const { setMode, setMainPlayer, resetBoard, setScores } =
    useContext(GameContext);
  const [unmountingSlide, setUnmountingSlide] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSlideToGame(true);
    setTimeout(() => {
      navigate("/game");
    }, 400);
  }

  return (
    <div
      className={`font-sans bg-yellow absolute right-0 w-screen md:w-7/12 h-screen z-10 pl-10 sm:pl-20 lg:pl-32 text-dark slideIn drop-shadow-2xl ${
        unmountingSlide ? "slideOut" : ""
      } ${slideToGame ? "slidetoleft" : ""}`}
    >
      <button
        className=" bg-lightyellow self-start text-3xl rounded-full flex items-center gap-8 hover:bg-creamwhite back-button transition-colors duration-300 ease-out absolute top-10"
        onClick={() => {
          setUnmountingSlide(true);
          setTimeout(() => {
            setMountSecondSlide(false);
            resetBoard();
            setScores({ X: 0, O: 0, Drew: 0 });
          }, 500);
        }}
      >
        <ArrowBackIcon />
      </button>

      <form
        onSubmit={handleSubmit}
        className="mt-48 flex flex-col gap-14 sm:gap-20"
      >
        <div className="flex flex-col gap-6">
          <h2 className="font-sans text-5xl md:text-7xl text-dark ">
            pick level。
          </h2>
          <div
            className="flex flex-col md:flex-row gap-6 sm:gap-12"
            onChange={(e) => setMode(e.target.value)}
          >
            <input
              type="radio"
              name="mode"
              value="easy"
              id="mode1"
              className="hidden"
              defaultChecked
            />
            <label
              htmlFor="mode1"
              className="text-lightyellow text-3xl lg:text-4xl cursor-pointer transition-colors duration-300 ease-out hover:text-creamwhite"
            >
              easy
            </label>
            <input
              type="radio"
              name="mode"
              value="medium"
              id="mode2"
              className="hidden"
            />
            <label
              htmlFor="mode2"
              className="text-lightyellow text-3xl lg:text-4xl cursor-pointer transition-colors duration-300 ease-out hover:text-creamwhite"
            >
              medium
            </label>
            <input
              type="radio"
              name="mode"
              value="hard"
              id="mode3"
              className="hidden"
            />
            <label
              htmlFor="mode3"
              className="text-lightyellow text-3xl lg:text-4xl cursor-pointer transition-colors duration-300 ease-out hover:text-creamwhite"
            >
              hard
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-sans text-5xl md:text-7xl text-dark ">
            pick side。
          </h2>
          <div
            className="flex gap-8 sm:gap-12"
            onChange={(e) => setMainPlayer(parseInt(e.target.value))}
          >
            <input
              type="radio"
              name="playerMode"
              value={0}
              id="player1"
              className="hidden"
              defaultChecked
            />
            <label
              htmlFor="player1"
              className="text-lightyellow text-3xl sm:text-4xl cursor-pointer transition-colors duration-300 ease-out hover:text-creamwhite"
            >
              X
            </label>
            <input
              type="radio"
              name="playerMode"
              value={1}
              id="player2"
              className="hidden"
            />
            <label
              htmlFor="player2"
              className="text-lightyellow text-3xl sm:text-4xl cursor-pointer transition-colors duration-300 ease-out hover:text-creamwhite"
            >
              O
            </label>
          </div>
        </div>
        <button className=" bg-creamwhite md:bg-lightyellow self-start text-2xl md:text-3xl rounded-full flex items-center gap-8 hover:bg-dark hover:text-creamwhite md:hover:text-dark md:hover:bg-creamwhite back-button md:slide-button transition-colors duration-300 ease-out absolute bottom-20 play-button">
          play
        </button>
      </form>
    </div>
  );
}

export default ModeSelection;
