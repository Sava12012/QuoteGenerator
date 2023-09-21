import { NavLink } from "react-router-dom";
import "./Header.css";
import Weather from "../Weather/Weather.jsx";

const Header = () => {
    return (
        <div className="headerContainer">
            <>
                <Weather/>
            </>

            <NavLink to="/randomQuote" className="randomQuotePage" activeClassName="active">Random Quote</NavLink>
            <NavLink to="/image-generator" className="ImageGeneratorPage" activeClassName="active">Image Generator</NavLink>


        </div>
    );
};

export default Header;
