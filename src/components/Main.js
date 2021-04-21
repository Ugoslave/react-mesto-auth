import React from "react";
import Card from "./Card";
import Header from "./Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
  userEmail,
  onSignOut,
}) {
  const user = React.useContext(CurrentUserContext);

  return (
    <>
      <Header
        textButton="Выйти"
        nav="sign-in"
        userEmail={userEmail}
        onSignOut={onSignOut}
      />
      <section className="profile">
        <div className="profile__info">
          <div onClick={onEditAvatar} className="profile__avatar-box">
            <img src={user.avatar} alt="Аватар" className="profile__avatar" />
          </div>
          <div className="profile__info-container">
            <div className="profile__title-box">
              <h1 className="profile__title">{user.name}</h1>
              <p className="profile__subtitle">{user.about}</p>
            </div>
            <button
              type="button"
              onClick={onEditProfile}
              className="profile__edit-button"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onAddPlace}
          className="profile__add-button"
        />
      </section>
      <section className="cards-container">
        <ul className="elements">
          {cards.map((item) => {
            return (
              <Card
                key={item._id}
                card={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Main;
