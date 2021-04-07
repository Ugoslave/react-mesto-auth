import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import avatarLoader from "../images/profile-avatar-loader.gif";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({
    name: "Please, waiting...",
    about: "Please, waiting...",
    avatar: `${avatarLoader}`
  });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          id: res._id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser.id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api
        .putLikeElement(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    } else {
      api
        .deleteLikeElement(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCardDelete(card) {
    api
      .removeElement(card._id)
      .then(setCards((state) => state.filter((c) => c._id !== card._id)))
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    api
      .getAllCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function handleUpdateUser(evt) {
    api
      .changeUserData(evt)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          id: res._id,
        });

        closeAllPopups();
      })
      .catch((err) => console.log(err));

    
  }

  function handleUpdateAvatar(evt) {
    api
      .changeAvatar(evt)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          id: res._id,
        });

        closeAllPopups();
      })
      .catch((err) => console.log(err));

    
  }

  function handleAddPlaceSubmit(evt) {
    api
      .addCard(evt)
      .then((res) => {
        setCards([res, ...cards]);
      })
      .catch((err) => console.log(err));

    closeAllPopups();
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Switch>

          <Route exact path='/sign-in'>
            <Login title = "Вход" name = "login" buttonText = "Войти"/>
          </Route>

          <Route exact path='/sign-up'>
            <Register />
          </Route>

        <Route exact path='/'>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        
        <Footer />
        </Route>
        </Switch>
      </div>
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <PopupWithForm
        name="remove-confirmation"
        title="Вы уверены?"
        buttonText="Да"
      />
        </CurrentUserContext.Provider>
      
  );
}

export default App;
