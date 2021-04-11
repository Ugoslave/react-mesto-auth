import closeButton from "../images/popup-closeButton.svg";

function InfoTooltip({ text, imageLink, onClose, isOpen }) {
  return (
    <div
      className={`popup popup_place_register-popup ${isOpen && "popup_active"}`}
    >
      <div className="popup__container popup__container_place_register-popup">
        <button type="button" className="popup__button-close" onClick={onClose}>
          <img
            src={closeButton}
            alt="Закрыть"
            className="popup__button-image"
          />
        </button>

        <figure className="popup__content-box popup__content-box_place_register-popup">
          <img
            src={imageLink}
            alt="Результат регистрации"
            className="popup__image popup__image_place_register-popup"
          />
          <figcaption className="popup__caption popup__caption_place_register-popup">
            {text}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default InfoTooltip;
