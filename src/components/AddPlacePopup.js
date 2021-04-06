import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [newCardTitle, setNewCardTitle] = React.useState("");
  const [newCardLink, setNewCardLink] = React.useState("");

  function handleTitleInputChange(evt) {
    setNewCardTitle(evt.target.value);
  }

  function handleLinkInputChange(evt) {
    setNewCardLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name: newCardTitle,
      link: newCardLink,
    });
  }

  React.useEffect(() => {
    if (isOpen === false) {
      setNewCardTitle("");
      setNewCardLink("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add-element"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        required
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        id="title-card"
        className="popup__input popup__input_data_title"
        value={newCardTitle}
        onChange={handleTitleInputChange}
      />
      <span id="title-card-error" className="popup__input-error" />
      <input
        required
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        id="link-card"
        className="popup__input popup__input_data_link"
        value={newCardLink}
        onChange={handleLinkInputChange}
      />
      <span id="link-card-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
