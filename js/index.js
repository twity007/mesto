const popupElement = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_js_edit");
const popupAdd = document.querySelector(".popup_js_add");
const popupPreview = document.querySelector(".popup_js_preview");



const popupCloseAdd = document.querySelector(".popup__close_js_add");
const popupClosePreview = document.querySelector(".popup__close_js_preview");
const popupCloseEdit = document.querySelector(".popup__close_js_edit");


const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");



const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");

const elementsContainer = document.querySelector("#element__template");
const elementsList= document.querySelector(".elements__list");
const element =document.querySelector('.elements__template');

const elementLike = document.querySelector('.element__like');
//const elementLikeActive = document.querySelector('.element__like_active');


const formElement = document.querySelector(".popup__form");
const formElementEdit = document.querySelector('.popup__form-edit');
const formElementAdd = document.querySelector('.popup__form-add');

const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_job");
const titleInput = formElementAdd.querySelector(".popup__input_type_title");
const linkInput = formElementAdd.querySelector(".popup__input_type_link");


function renderElement(array) {
  array.forEach((element) => addElement(createElement(element)));
}

renderElement(initialCards);

function createElement(element) {

    const listElements = document.querySelector('.elements__list');
    const itemTemplateContent = document.querySelector('#element__template').content;
    const itemsElement = itemTemplateContent.cloneNode(true);
    itemsElement.querySelector('.element__img').src = element.link;
    itemsElement.querySelector('.element__title').textContent = element.name;
    itemsElement.querySelector('.element__img').alt = element.name;

        return itemsElement;

};

function addElement(element) {

  elementsList.prepend(element);

}

function openPopup (popup) { 
    popup.classList.add("popup_opened"); 
 
}; 



function closePopup (popup) {
        popup.classList.remove("popup_opened");

};

function openEditProfilePopup () {  
    nameInput.value = title.textContent; 
    jobInput.value = subtitle.textContent; 
      openPopup(popupEdit);

 
}; 

function openAddElemPopup() {
  openPopup(popupAdd);
}

function openPopupPreview(event) {
  const elem = event.target;

  if (elem.classList.contains("element__img")) {
    const previewImg = document.querySelector(".preview__img");
    const previewText = document.querySelector(".preview__caption");

    previewImg.src = elem.src;
    previewText.textContent = elem.alt;

    openPopup(popupPreview);
  }
}


function closePopupPreview() {
  closePopup(popupPreview);
}

function closePopupAdd() {
   closePopup(popupAdd);
}


function closePopupEdit() {
  closePopup(popupEdit);
}



function clickLike(event) {
  if (event.target.classList.contains("element__like")) {
      event.target.classList.toggle("element__like_active");
  }
}

function deleteElement(event) {
  if (event.target.classList.contains("element__delete")) {
    event.target.closest(".elements__template").remove();
  }
}



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler(evt) {
    evt.preventDefault();

    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;

closePopupEdit();

}

function formSubmitHandlerAddElement(evt) {
    evt.preventDefault();


const itemElement = {
    name: titleInput.value,
    link: linkInput.value,
  };
  addElement(createElement(itemElement));
  closePopupAdd();
  formElementAdd.reset();

}





formElement.addEventListener("submit", formSubmitHandler);
formElementAdd.addEventListener("submit", formSubmitHandlerAddElement);


editButton.addEventListener("click", openEditProfilePopup);

popupCloseAdd.addEventListener("click", closePopupAdd);
popupClosePreview.addEventListener("click", closePopupPreview);
popupCloseEdit.addEventListener("click", closePopupEdit);

addButton.addEventListener("click", openAddElemPopup);


elementsList.addEventListener("click", openPopupPreview);
elementsList.addEventListener("click", clickLike);
elementsList.addEventListener("click", deleteElement);