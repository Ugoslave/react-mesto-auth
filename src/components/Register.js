import {handleRegistration} from '../utils/authorization';
import React from "react";

function Register() {
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange (evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange (evt) {
    setPassword(evt.target.value);
  }

  function handleRegisterSubmit (evt) {
        evt.preventDefault();
        handleRegistration(password, email);
        setEmail('');
        setPassword('');
  }

  return (
    <>
    <div className="form-container">
      <h2 className="form-container__title">Регистрация</h2>
      <form name="newUser" onSubmit={handleRegisterSubmit} className="form" noValidate>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="form__input" 
          value={email} 
          onChange={handleEmailChange}
        />
        <span className="form__input-error" />
        <input
          required
          type="password"
          name="password"
          placeholder="Пароль"
          minLength="6"
          maxLength="12"
          className="form__input" 
          value={password} 
          onChange={handlePasswordChange}
        />
        <span className="form__input-error" />

        <button type="submit" className="form__button">
          Зарегистрироваться
        </button>
      </form>
    </div>
    <p className = "form-container__text">Уже зарегистрированы?<a className = "form-container__link" href="#">Войти</a></p>
    </>
  )
}

export default Register;
