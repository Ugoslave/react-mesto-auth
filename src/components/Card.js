import removeButton from "../images/element-removeButton.svg";
import likeButton from "../images/element-like.svg";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const user = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === user.id;
  const cardDeleteButtonClassName = `element__remove-button ${
    isOwn ? "element__remove-button" : "element__remove-button_disactive"
  }`;
  const isLiked = card.likes.some((i) => i._id === user.id);
  const cardLikeButtonClassName = `element__button ${
    isLiked ? "element__button_active" : "element__button"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <div className="element__image-box">
        <img
          src={card.link}
          alt={card.name}
          className="element__image"
          onClick={handleClick}
        />
        <button
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        >
          <img src={removeButton} alt="Удалить" />
        </button>
      </div>
      <div className="element__text-box">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-box">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          >
            <img src={likeButton} alt="Нравится" />
          </button>
          <p className="element__likes-number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
