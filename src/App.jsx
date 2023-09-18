import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
// import RandomQuote from "./page/RandomQuote/RandomQuote.jsx";
import Weather from "./components/Weather/Weather.jsx"

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Weather />} />
                {/*<Route path="/" element={<RandomQuote />} />*/}
                {/* Додайте інші маршрути тут */}
            </Routes>
        </Router>
    );
}

export default App;
