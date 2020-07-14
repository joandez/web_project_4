import {imageLightboxPopup, lightboxImg, lightboxCaption, popupOverlays} from "./index.js";

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

// Create Card class
class Card {
	constructor(data, cardTemplateSelector) {
		this._cardTitle = data.cardTitle;
		this._cardImage = data.cardImage;

		this._cardTemplateSelector = cardTemplateSelector;
  	}
	
	_getCardTemplate() {
		  const cardTemplate = document
			  .querySelector(this._cardTemplateSelector)
			  .content.querySelector('.elements__card')
			  .cloneNode(true);
		return cardTemplate;
  }

  	_addEventListeners() {
		this._cardImage = this._card.querySelector('.elements__image');
		this._likeButton = this._card.querySelector('.elements__like-button');
		this._trashButton = this._card.querySelector('.elements__trash-button');

		this._cardImage.addEventListener('click', () => {
			togglePopup(imageLightboxPopup);
			lightboxImg.src = this._cardImage;
			lightboxImg.alt = this._cardTitle;
			lightboxCaption.textContent = this._cardTitle;
		});
		
		likeButton.addEventListener('click', (evt) => {
			evt.target.closest('.elements__like-button').classList.toggle('elements__like-button_state_active');
		});
		
		this._trashButton.addEventListener('click', (evt) => {
			this._cardElement.remove();
		});
	  }

  	generateCard = () => {
		const cardElements = this._getCardTemplate();
		this._cardElements = cardElements;	

		this._cardElements.querySelector('.elements__image').style.backgroundImage = `url('${this._cardImage}')`;
		this._cardElements.querySelector('.elements__name').textContent = this._cardTitle;

		this._addEventListeners();	
		return cardElements;
	  }
}

export {Card, togglePopup};