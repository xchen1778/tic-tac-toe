import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerSelection from "./pages/PlayerSelection";
import ModeSelection from "./pages/ModeSelection";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayerSelection />} />
        <Route path="/mode-selection" element={<ModeSelection />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
