import closeButton from "../images/popup-closeButton.svg";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_place_${props.name} ${
        props.isOpen && "popup_active"
      }`}
    >
      <div className={`popup__container popup__container_place_${props.name}`}>
        <button
          type="button"
          className={`popup__button-close popup__button-close_place_${props.name}`}
          onClick={props.onClose}
        >
          <img
            src={closeButton}
            alt="Закрыть"
            className="popup__button-image"
          />
        </button>
        <div className={`popup__form-box popup__form-box_place_${props.name}`}>
          <h2 className={`popup__title popup__title_place_${props.name}`}>
            {props.title}
          </h2>
          <form
            name={props.name}
            className={`popup__form popup__form_place_${props.name}`}
            noValidate
            onSubmit={props.onSubmit}
          >
            {props.children}
            <button
              type="submit"
              className={`popup__button-save popup__button-save_place_${props.name}`}
            >
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
