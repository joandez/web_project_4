// Declare variables
const editButton = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.edit-form');
const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');
const saveButton = document.querySelector('.edit-form__save-button');

// Open Edit Profile popup 
function openPopup() {
	popupElement.classList.remove('popup__closed');
	popupElement.classList.add('popup__opened');
}

// Close Edit Profile popup with X button
function closePopup() {
	popupElement.classList.remove('popup__opened');
	popupElement.classList.add('popup__closed');
}

// Submit form fields to Profile information

function formSubmitHandler (evt) {
    evt.preventDefault();
	
	let nameInput = document.querySelector('#form__profile-name');
	let titleInput = document.querySelector('#form__profile-title');

	document.querySelector(".profile__name").textContent = nameInput.value;
	document.querySelector(".profile__title").textContent = titleInput.value;	
}

// Create event listeners

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
saveButton.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);