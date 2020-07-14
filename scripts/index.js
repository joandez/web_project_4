// Import from other module script files
import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

// Declare "Edit User" modal elements
const editButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup__type_profile');
const profileCloseButton = profilePopup.querySelector('.popup__close-button');

const profileForm = document.querySelector('.edit-form__type_profile');
const nameInput = document.querySelector('.edit-form__field_name');
const titleInput = document.querySelector('.edit-form__field_title');
const profileName = document.querySelector('.profile__name');
const profileTitle = document.querySelector('.profile__title');

// Declare "New Location" modal elements
const addButton = document.querySelector('.profile__add-button');

const locationPopup = document.querySelector('.popup__type_location');
const locationCloseButton = locationPopup.querySelector('.popup__close-button');

const locationForm = document.querySelector('.edit-form__type_location');
const locationNameInput = document.querySelector('.edit-form__field_card-title');
const locationLinkInput = document.querySelector('.edit-form__field_card-link');

// Find Locations grid and Card template
const elementGrid = document.querySelector('.elements__grid');
const cardTemplateSelector = '.card-template';

// Declare global modal elements
const popupOverlays = document.querySelectorAll('.popup');

// Declare "Image Lightbox" modal elements
const imageLightboxPopup = document.querySelector('.popup__type_lightbox');
const lightboxCloseButton = imageLightboxPopup.querySelector('.popup__close-button');

const lightboxImg = imageLightboxPopup.querySelector('.popup__lightbox-image');
const lightboxCaption = imageLightboxPopup.querySelector('.popup__lightbox-caption');

// Define and declare form validators
const defaultConfig = {
	inputSelector: ".edit-form__field",
	submitButtonSelector: ".edit-form__save-button",
	inactiveButtonClass: "edit-form__save-button_disabled",
	inputErrorClass: "edit-form__field_type_error",
	errorClass: "edit-form__error_visible"
};

// Call form validators
const editProfileValidation = new FormValidator(defaultConfig, profileForm);
const addCardValidation = new FormValidator(defaultConfig, locationForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

// Create new card and add to Element Grid
const createCard = (data, elementGrid) => {
	const newCard = new Card(data, cardTemplateSelector);
	elementGrid.prepend(newCard.generateCard());
}

// Declare data for initial Location cards
const initialCards = [
	{
		cardTitle: "Yosemite Valley",
		cardImage: "https://code.s3.yandex.net/web-code/yosemite.jpg"
	},
	{
		cardTitle: "Lake Louise",
		cardImage: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
	},
	{
		cardTitle: "Bald Mountains",
		cardImage: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
	},
    {
        cardTitle: "Latemar",
        cardImage: "https://code.s3.yandex.net/web-code/latemar.jpg"
	},
	{
        cardTitle: "Vanois National Park",
        cardImage: "https://code.s3.yandex.net/web-code/vanois.jpg"
	},
	{
        cardTitle: "Lago di Braies",
        cardImage: "https://code.s3.yandex.net/web-code/lago.jpg"
	}
];

// Render initial Location cards
initialCards.forEach((data) => {
	createCard(data, elementGrid);
});

// Toggle popup modal display
function togglePopup(modal) {
	modal.classList.toggle('popup__opened');
	escKeyListener(modal);	
}

// Close each modal when clicking on overlay

popupOverlays.forEach((popupOverlay) => {
	popupOverlay.addEventListener('click', function(evt) {
		if (evt.target === popupOverlay) {
			togglePopup(evt.target);	
		}
	})
});

// Close each modal with ESC key

function escKey(evt) {
  if (evt.keyCode === 27) {
    togglePopup(document.querySelector('.popup__opened')); 
  }
}

function escKeyListener(modal) {
	if (modal.classList.contains('popup__opened')) {
		document.addEventListener('keydown', escKey);
	} else {
		document.removeEventListener('keydown', escKey);
	}
}

// Submit "Edit User" form fields to Profile information

profileForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
		
	profileName.textContent = nameInput.value;
	profileTitle.textContent = titleInput.value;
	togglePopup(profilePopup);
});

// Submit "New Location" form fields to card data

locationForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	createCard({cardTitle:locationNameInput.value, cardImage:locationLinkInput.value});
	locationForm.reset();
	togglePopup(locationPopup);
});

// Create "Image Lightbox" event listeners
lightboxCloseButton.addEventListener('click', () => {
	togglePopup(imageLightboxPopup);
});

// Create "Edit User" event listeners

editButton.addEventListener('click', () => {
	togglePopup(profilePopup);
});

profileCloseButton.addEventListener('click', () => {
	togglePopup(profilePopup);
});

// Create "New Location" event listeners
addButton.addEventListener('click', () => {
	togglePopup(locationPopup);
});

locationCloseButton.addEventListener('click', () => {
	togglePopup(locationPopup);
});

// Export to other script files
export {togglePopup, imageLightboxPopup, lightboxImg, lightboxCaption, popupOverlays};