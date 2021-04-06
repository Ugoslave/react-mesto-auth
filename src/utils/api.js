class Api {
  // создаем и экспортируем класс работы с API

  constructor(dataConfig) {
    this._url = dataConfig.url;
    this._headers = dataConfig.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`ОШИБКА: ${res.status}`);
    }
  }

  getAllCards() {
    // метод получения всех карточек с сервера
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addCard(data) {
    // метод сохранения новой карточки на сервере
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  removeElement(id) {
    // метод удаления карточки с сервера
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserData() {
    // метод получения информации о пользователе с сервера
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  changeUserData(newData) {
    // метод сохранения новых данных пользователя на сервере
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(newData),
    }).then(this._checkResponse);
  }

  changeAvatar(avatarLink) {
    // метод сохранения новой ссылки на аватар
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatarLink),
    }).then(this._checkResponse);
  }

  putLikeElement(id) {
    // метод для добавления лайка
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteLikeElement(id) {
    // метод для снятия лайка
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const api = new Api({
  // записываем в переменную экземпляр класса Api;
  url: "https://mesto.nomoreparties.co/v1/cohort-20",
  headers: {
    "content-type": "application/json",
    authorization: "17a61d6a-801a-4cf0-9a4b-c3020830f258",
  },
});

export default api;
