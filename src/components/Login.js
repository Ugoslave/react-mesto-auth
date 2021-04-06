function Login(props) {
  return (
    <div className="form-container">
      <h2 className="form-container__title">{props.title}</h2>
      <form name={props.name} className="form" noValidate>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="form__input"
        />
        <span className="form__input-error" />
        <input
          required
          type="password"
          name="password"
          placeholder="Пароль"
          minLength="6"
          maxLength="12"
          className="form__input-error"
        />
        <span className="form__input-error" />

        <button type="submit" className="form__button">
          {props.buttonText}
        </button>
      </form>
      <p className="form-container__text">Уже зарегистрированы? <a className="form-container__link">Войти</a></p>
    </div>
  );
}

export default Login;
