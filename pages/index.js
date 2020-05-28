// Declare variables
const editButton = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.edit-form');
const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');
const saveButton = document.querySelector('.edit-form__save-button');
let nameInput = document.querySelector('.edit-form__field_name');
let titleInput = document.querySelector('.edit-form__field_title');

// Toggle Popup display

function togglePopup() {   
    popupElement.classList.toggle('popup__opened');
}

// Submit form fields to Profile information

function formSubmitHandler (evt) {
    evt.preventDefault();
	
	profileName.textContent = nameInput.value;
	profileTitle.textContent = titleInput.value;	

}

// Create event listeners

editButton.addEventListener("click", togglePopup);
closeButton.addEventListener('click', togglePopup);
saveButton.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);