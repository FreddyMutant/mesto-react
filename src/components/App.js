import React from "react";
import { Header } from "./Header";
import { Main } from "./Main.js";
import { Footer } from "./Footer.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { ImagePopup } from "./ImagePopup.js";

function App() {
  const [isEditPopupProfileOpen, setEditPopupProfileOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditPopupProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditPopupProfileOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditPopupProfileOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          required
          noValidate
          id="popup__name"
        />
        <span className="popup__input-error popup__name-error"></span>

        <input
          className="popup__input popup__input_type_profession"
          placeholder="О себе"
          type="text"
          name="profession"
          minLength="2"
          maxLength="200"
          required
          noValidate
          id="popup__prof"
        />
        <span className="popup__input-error popup__prof-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add-pic"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input popup__input_type_place popup__input_type_error"
          placeholder="Название"
          name="name"
          minLength="2"
          maxLength="30"
          required
          noValidate
          id="popup__pick"
        />
        <span className="popup__input-error popup__pick-error"></span>
        <input
          className="popup__input popup__input_type_link popup__input_type_error"
          placeholder="Ссылка на картинку"
          type="url"
          name="link"
          required
          noValidate
          id="popup__link"
        />
        <span className="popup__input-error popup__link-error"></span>
      </PopupWithForm>
      <div className="popup popup_type_image-big">
        <div className="popup__image-container">
          <img className="popup__card-image" src="#" alt="#" />
          <p className="popup__image-caption"></p>
          <button
            className="popup__button-close"
            type="button"
            title="Закрыть окно"
            aria-label="Закрыть"
          ></button>
        </div>
      </div>
      <PopupWithForm
        name="avatar"
        title="обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link popup__input_type_error popup__input_name_link-avatar"
          name="link"
          required
          id="avatar-link"
        />
        <span className="popup__input-error avatar-link-error"></span>
      </PopupWithForm>
      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <h3 className="popup__header popup__confirm">Вы уверены?</h3>
          <form
            className="form_confirm popup__form"
            name="confirm-form"
            noValidate
          >
            <button
              type="submit"
              className="popup__button-save popup__confirm-button"
              name="submit"
              value="Да"
            />
            <button
              className="popup__button-close"
              type="button"
              title="Закрыть окно"
              aria-label="Закрыть"
            ></button>
          </form>
        </div>
      </div>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      ></ImagePopup>
    </div>
  );
}

export default App;
