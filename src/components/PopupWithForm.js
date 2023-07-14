function PopupWithForm({ name, isOpen, title, onClose, children }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={onClose}
        ></button>
        <form className={`form_${name} popup__form`} name={`${name}-form`}>
          <div className="popup__header">{title}</div>
          {children}
          <button type="submit" className="popup__button-save">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export { PopupWithForm };
