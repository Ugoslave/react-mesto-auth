import logo from "../images/header-logo.svg";
import { Link } from 'react-router-dom';

function Header({path, textButton}) {
  return (
    <header className="header">
      <img src={logo} alt="Место" className="logo" />
      <p className="header__button">
        <Link to ={`/${path}`}>
          {textButton}
        </Link>
      </p>
    </header>
  );
}

export default Header;
