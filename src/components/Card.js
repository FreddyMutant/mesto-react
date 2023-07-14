function Card({ link, alt, name, count, card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="grid-item">
      <img
        src={link}
        alt={alt}
        className="grid-item__image"
        onClick={handleClick}
      />
      <div className="grid-item__wrap">
        <h3 className="grid-item__name">{name}</h3>
        <div className="grid-item__like-container">
          <button
            type="button"
            className="grid-item__like"
            aria-label="Понравилось"
          ></button>
          <p className="grid-item__like-counter">{count}</p>
        </div>
        <button
          className="grid-item__delete-btn"
          aria-label="Удалить картинку"
        ></button>
      </div>
    </li>
  );
}
export { Card };
