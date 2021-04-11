import * as authorization from "../utils/authorization.js";
import React from "react";
import { useHistory, Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    authorization.handleRegistration(password, email).then((res) => {
      if (res) {
        history.push("/sign-in");
        onRegister();
      }
    });

    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className="form-container">
        <h2 className="form-container__title">Регистрация</h2>
        <form
          name="newUser"
          onSubmit={handleRegisterSubmit}
          className="form"
          noValidate
        >
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
      <p className="form-container__text">
        Уже зарегистрированы?
        <Link to="/sign-in">
          <span className="form-container__link">Войти</span>
        </Link>
      </p>
    </>
  );
}

export default Register;
