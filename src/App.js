import { GameContextProvider } from "./contexts/game.context";
import Board from "./components/Board";

function App() {
  return (
    <div className="app">
      <GameContextProvider>
        <Board />
      </GameContextProvider>
    </div>
  );
}

export default App;
