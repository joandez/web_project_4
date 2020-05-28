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

// Open Edit Profile popup  
function openPopup() { 

	popupElement.classList.add('popup__opened'); 
} 

// Toggle Popup display

function togglePopup() {   
    popupElement.classList.toggle('popup__opened');
}

// Submit form fields to Profile information

function formSubmitHandler (evt) {
    evt.preventDefault();
	
	document.querySelector('.profile__name').textContent = nameInput.value;
	document.querySelector('.profile__title').textContent = titleInput.value;	

}

// Create event listeners

editButton.addEventListener("click", openPopup);
closeButton.addEventListener('click', togglePopup);
saveButton.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);