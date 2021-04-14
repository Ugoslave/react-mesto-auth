import logo from "../images/header-logo.svg";
import { Link } from "react-router-dom";

function Header({ nav, textButton, onSignOut, userEmail }) {
  return (
    <header className="header">
      <img src={logo} alt="Место" className="logo" />

      <Link to={`/${nav}`}>
        <p className="header__button" onClick={onSignOut}>
          {userEmail}
          <span className="header__text">{textButton}</span>
        </p>
      </Link>
    </header>
  );
}

export default Header;
