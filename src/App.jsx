import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import RandomQuote from "./page/RandomQuote/RandomQuote.jsx";
import VoiceConverter from "./page/VoiceConverter/VoiceConverter";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<VoiceConverter />} />
        <Route path="/randomQuote" element={<RandomQuote />} />
      </Routes>
    </Router>
  );
}

export default App;
