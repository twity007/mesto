const popupElement = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupOpen = document.querySelector(".profile__edit-button");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_job");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");

const openPopup = function () {
    popupElement.classList.add("popup_opened");

   nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;

};

const closePopup = function (evt) {
        evt.preventDefault();
        popupElement.classList.remove("popup_opened");
};

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler(evt) {
    evt.preventDefault();

    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;

    closePopup(evt);

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);

popupOpen.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
