import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="headerContainer">
            <NavLink to="/" className="randomQuotePage" activeClassName="active">Random Quote</NavLink>
            <NavLink to="/image-generator" className="ImageGeneratorPage" activeClassName="active">Image Generator</NavLink>
        </div>
    );
};

export default Header;
