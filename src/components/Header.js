import logo from "../images/header-logo.svg";
import { useHistory, Link } from 'react-router-dom';

function Header({nav, textButton, loggedIn, userEmail}) {
  const history = useHistory();

  function signOut () {
    
    if (loggedIn) {
      localStorage.removeItem('token');
      history.push('/sign-in');
    }
  }

  return (
    <header className="header">
      <img src={logo} alt="Место" className="logo" />
      
        <Link to ={`/${nav}`}>
        <p className="header__button" onClick = {signOut}>
        {userEmail}<span className="header__text">{textButton}</span>
        </p>
        </Link>
        
    </header>
  );
}

export default Header;
