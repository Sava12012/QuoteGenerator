import { NavLink } from "react-router-dom";
import "./Header.css";
import Weather from "../Weather/Weather.jsx";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="weatherWrapper">
        <Weather />
      </div>
      <div className="headerContainer">
        <NavLink
          to="/randomQuote"
          className="randomQuotePage"
          activeClassName="active"
        >
          Random Quote
        </NavLink>
        <NavLink
          to="/imageGenerator"
          className="ImageGeneratorPage"
          activeClassName="active"
        >
          Image Generator
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
