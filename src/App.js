import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundText from "./components/BackgroundText";
import Landing from "./pages/Landing";
import PlayerSelection from "./pages/PlayerSelection";
import Game from "./pages/Game";

function App() {
  return (
    <div className="app">
      <Router>
        <BackgroundText />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/player-selection" element={<PlayerSelection />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
