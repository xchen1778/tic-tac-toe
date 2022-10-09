import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../contexts/game.context";

const TextPair = () => (
  <>
    <span className="transition-colors duration-300 ease-out">O</span>
    <span className="transition-colors duration-300 ease-out">X</span>
  </>
);

const ReverseTextPair = () => (
  <>
    <span className="transition-colors duration-300 ease-out">X</span>
    <span className="transition-colors duration-300 ease-out">O</span>
  </>
);

function BackgroundText() {
  const { move, setMove } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.setItem("backgroundText", JSON.stringify(move));
  }, [move]);

  return (
    <div
      onClick={() => {
        if (!move) {
          setMove(true);
          navigate("/player-selection");
        }
      }}
    >
      <div
        className={`marquee1 whitespace-nowrap absolute top-0 left-0 ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 20 }).map((ele, index) => (
            <TextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee1 marquee1-sub whitespace-nowrap absolute top-0 left-0 z-[-1] ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 10 }).map((ele, index) => (
            <TextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee2 whitespace-nowrap absolute left-0 ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 10 }).map((ele, index) => (
            <ReverseTextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee2 marquee2-sub whitespace-nowrap absolute left-0 z-[-1] ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 10 }).map((ele, index) => (
            <ReverseTextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee3 whitespace-nowrap absolute left-0 ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 20 }).map((ele, index) => (
            <TextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee3 marquee3-sub whitespace-nowrap absolute left-0 z-[-1] ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 10 }).map((ele, index) => (
            <TextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee4 whitespace-nowrap absolute left-0 ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 10 }).map((ele, index) => (
            <ReverseTextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee4 marquee4-sub whitespace-nowrap absolute left-0 z-[-1] ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 10 }).map((ele, index) => (
            <ReverseTextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee5 whitespace-nowrap absolute left-0 ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 20 }).map((ele, index) => (
            <TextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee5 marquee5-sub whitespace-nowrap absolute left-0 z-[-1] ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 10 }).map((ele, index) => (
            <TextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee6 whitespace-nowrap absolute left-0 ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 10 }).map((ele, index) => (
            <ReverseTextPair key={index} />
          ))}
        </div>
      </div>
      <div
        className={`marquee6 marquee6-sub whitespace-nowrap absolute left-0 z-[-1] ${
          move ? "move" : ""
        }`}
      >
        <div className="font-sans inline-block text-dark transition-colors duration-300 ease-out">
          {Array.from({ length: 10 }).map((ele, index) => (
            <ReverseTextPair key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BackgroundText;
