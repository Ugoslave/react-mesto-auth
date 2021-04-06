const addButton = document.querySelector('.profile__add-button'); // выбираем в проекте класс кнопки "Добавить";
const editButton = document.querySelector('.profile__edit-button'); // выбираем в проекте класс кнопки "Войти";
const avatarBox = document.querySelector('.profile__avatar-box');
const cardsContainer = document.querySelector('.elements');
const inputName = document.querySelector('.popup__input_data_name'); // выбираем в проекте класс первого поля ввода формы в "Попап-окне";
const inputAbout = document.querySelector('.popup__input_data_about-yourself'); // выбираем в проекте класс второго поля ввода формы в "Попап-окне";

const userDataSelector = {
  name: '.profile__title', 
  about: '.profile__subtitle',
  avatar: '.profile__avatar'
};

const validationConfig = { // присваиваем переменной объект с настройками формы, значения ключей - необходимые при валидации названия классов;
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_state_invalid',
  inputErrorClass: 'popup__input_state_invalid'
};

export {addButton, 
        editButton,  
        userDataSelector, 
        inputName, 
        inputAbout, 
        avatarBox, 
        validationConfig, 
        cardsContainer};