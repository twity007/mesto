const popupElement = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupOpen = document.querySelector(".profile__edit-button");
let formElement = document.querySelector(".popup__form");




const openPopup = function () {
    popupElement.classList.add("popup_opened");
};

const closePopup = function () {
    popupElement.classList.remove("popup_opened");
};


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault();

    const nameInput = formElement.querySelector(".popup__input_type_name").value;
    const jobInput = formElement.querySelector(".popup__input_type_job").value;

    let title = document.querySelector(".profile__title");
    let subtitle = document.querySelector(".profile__subtitle");

   title.textContent = nameInput;
   subtitle.textContent = jobInput;

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);

popupOpen.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
