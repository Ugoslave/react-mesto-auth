function Login({email, onChange, handleSubmit, password}) {
  return (
    <div className="form-container">
      <h2 className="form-container__title">Вход</h2>
      <form name="auth" onSubmit={handleSubmit} className="form" noValidate>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="form__input" 
          value={email} 
          onChange={onChange}
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
          onChange={onChange}
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
