function Login({title, name, buttonText}) {
  return (
    <div className="form-container">
      <h2 className="form-container__title">{title}</h2>
      <form name={name} className="form" noValidate>
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
          className="form__input"
        />
        <span className="form__input-error" />

        <button type="submit" className="form__button">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default Login;
