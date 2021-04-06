import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const user = React.useContext(CurrentUserContext);

  function handleNameInputChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionInputChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name: name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        required
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        id="name-card"
        className="popup__input popup__input_data_name"
        value={name}
        onChange={handleNameInputChange}
      />
      <span id="name-card-error" className="popup__input-error" />
      <input
        required
        type="text"
        name="about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        id="about-card"
        className="popup__input popup__input_data_about-yourself"
        value={description}
        onChange={handleDescriptionInputChange}
      />
      <span id="about-card-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
