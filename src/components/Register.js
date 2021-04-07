import Login from './Login';

function Register() {
  return (
    <>
    <Login title = "Регистрация" name = "NewUser" buttonText = "Зарегистрироваться" />
    <p className = "form-container__text">Уже зарегистрированы?<a className = "form-container__link" href="#">Войти</a></p>
    </>
  )
}

export default Register;
