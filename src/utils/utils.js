const inputName = document.querySelector(".popup__input_type_name");
const inputProf = document.querySelector(".popup__input_type_profession");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__profession");
const profileAvatar = document.querySelector(".profile__avatar");
const editForm = document.querySelector(".popup__edit-form");
const popups = document.querySelectorAll(".popup");
const popupAdd = document.querySelector(".popup_type_add-pic");
const addButton = document.querySelector(".profile__add-button");
const cardsContainer = document.querySelector(".grid-photos");
const formAdd = document.querySelector(".popup__form-add");
const inputPlace = document.querySelector(".popup__input_type_place");
const inputLink = document.querySelector(".popup__input_type_link");
const cardTemplate = "#card-template";
const popupConfirmSelector = document.querySelector(".popup_type_confirm");
const popupAvatarInput = document.querySelector(
  ".popup__input_name_link-avatar"
);
const popupFormAdd = document.querySelector(".popup__form-edit");
const popupAvatarEdit = document.querySelector(".popup_type_avatar");
const editAvatarButton = document.querySelector(".profile__avatar-button");

const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  errorClass: "popup__input-error_active",
  buttonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
};

export {
  formValidationConfig,
  inputName,
  inputProf,
  profileName,
  profileJob,
  inputPlace,
  editForm,
  popups,
  popupAdd,
  inputLink,
  addButton,
  cardsContainer,
  cardTemplate,
  formAdd,
  popupConfirmSelector,
  profileAvatar,
  popupAvatarInput,
  editAvatarButton,
  popupFormAdd,
  popupAvatarEdit,
};
