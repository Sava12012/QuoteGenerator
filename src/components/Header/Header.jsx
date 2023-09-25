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
        <NavLink to="/" className="home" activeClassName="active">
          Home
        </NavLink>
        <NavLink
          to="/randomQuote"
          className="randomQuotePage"
          activeClassName="active"
        >
          Random Quote
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
