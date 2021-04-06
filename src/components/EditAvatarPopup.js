import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    if (isOpen === false) {
      avatarRef.current.value = "";
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar-update"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        required
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        id="link-avatar"
        className="popup__input popup__input_data_link"
        ref={avatarRef}
      />
      <span id="link-avatar-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
