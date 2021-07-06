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

const elemTemplate = document.querySelector('.elements__template');
const elementsList = document.querySelector(".elements__list");

  const elementLike = document.querySelector(".element__like");

// const elemInfo = document.querySelector('.element__info');

// console.log(elementLike);
//      const elementImg = document.querySelector('.element__img');
//          const elementTitle = document.querySelector('.element__title');



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
      const itemTemplateContent = document.querySelector('#element__template').content; 

  const itemsElement = itemTemplateContent.cloneNode(true); 
const elementImg = itemsElement.querySelector('.element__img');
        const elementTitle = itemsElement.querySelector('.element__title');
  const listElements = document.querySelector('.elements__list'); 
   
  
    elementImg.src = element.link; 
    elementTitle.textContent = element.name; 
    elementImg.alt = element.name; 
 
        return itemsElement;


};

function openPopupPreview(event) {
  const elem = event.target;
   const previewImg = document.querySelector(".preview__img");
    const previewText = document.querySelector(".preview__caption");

  if (elem.classList.contains("element__img")) {
   
    previewImg.src = elem.src;
    previewText.textContent = elem.alt;

    openPopup(popupPreview);
  }
}

function clickLike(event) {
  event.target.classList.toggle("element__like_active"); 
}


function deleteElement(event) {
  if (event.target.classList.contains("element__delete")) {
    event.target.closest(".elements__template").remove();
  }
}


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




function closePopupPreview() {
  closePopup(popupPreview);
}

function closePopupAdd() {
   closePopup(popupAdd);
}


function closePopupEdit() {
  closePopup(popupEdit);
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
elementsList.addEventListener("click", deleteElement);
elementsList.addEventListener("click", clickLike);
