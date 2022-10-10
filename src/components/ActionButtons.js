import { useContext } from "react";
import GameContext from "../contexts/game.context";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function ActionButtons({ setFadeOutAgain, setSlideOutFull, setTextHidden }) {
  const { resetBoard, setScores } = useContext(GameContext);
  const navigate = useNavigate();
  function handleRestart() {
    setSlideOutFull(true);
    setTimeout(() => {
      setTextHidden(true);
    }, 200);
    setTimeout(() => {
      resetBoard();
      setScores({ X: 0, O: 0, Draw: 0 });
      navigate("/");
      setSlideOutFull(false);
    }, 500);
  }
  function handleReset() {
    setFadeOutAgain(true);
    setTimeout(() => {
      resetBoard();
      setScores({ X: 0, O: 0, Draw: 0 });
      setFadeOutAgain(false);
    }, 300);
  }

  return (
    <div className="flex justify-between px-8 md:px-14 absolute w-full top-10 fadeIn z-40">
      <button
        className="bg-lightyellow self-start text-3xl rounded-full flex items-center gap-8 hover:bg-creamwhite back-button transition-colors duration-300 ease-out"
        onClick={handleRestart}
      >
        <HomeIcon />
      </button>
      <button
        className=" bg-lightyellow text-dark font-sans self-start text-2xl rounded-full flex items-center gap-8 hover:bg-creamwhite back-button transition-colors duration-300 ease-out"
        onClick={handleReset}
      >
        reset
      </button>
    </div>
  );
}

export default ActionButtons;
