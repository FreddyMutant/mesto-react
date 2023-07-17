import React from "react";
import { api } from "../utils/api.js";
import { Card } from "../components/Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  const getUserInfoApi = () => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  };

  const getCardsApi = () => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  };

  React.useEffect(() => {
    getUserInfoApi();
    getCardsApi();
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-wrap">
            <button className="profile__avatar-button" onClick={onEditAvatar}>
              <img src={userAvatar} className="profile__avatar" alt="аватар" />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__wrap">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                title="Изменить профиль"
                aria-label="Изменить"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          title="Добавить фото"
          aria-label="Добавить"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="photos">
        <ul className="grid-photos">
          {cards.map((card, i) => (
            <Card
              key={card._id}
              name={card.name}
              alt={card.name}
              link={card.link}
              count={card.likes.length}
              card={card}
              onCardClick={onCardClick}
            ></Card>
          ))}
        </ul>
      </section>
    </main>
  );
}
export { Main };
