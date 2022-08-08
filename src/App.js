import "./App.css";
import SongOverview from "./components/SongOverview";
import About from "./components/AboutUs";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div className="router-wrapper">
      {/* BrowserRouter as Router */}
      <Router>
        {/* Home => About */}
        <Link to="/" className="home-nav">
          Home
        </Link>
        {/* About => Home */}
        <Link to="/about" className="about-nav">
          About
        </Link>
        <Routes>
          <Route path="/" exact element={<SongOverview />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
