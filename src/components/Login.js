import React from "react";

function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({
      password: password, 
      email: email
    });

    setEmail('');
    setPassword('');

  }

  return (
    <div className="form-container">
      <h2 className="form-container__title">Вход</h2>
      <form
        name="auth"
        onSubmit={handleSubmit}
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
