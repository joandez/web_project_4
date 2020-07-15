// Import from other module script files
import {imageLightboxPopup, togglePopup} from "./utils.js";

// Create Card class
class Card {
	constructor(data, cardTemplateSelector) {
		this._cardImage = data.cardImage;
		this._cardTitle = data.cardTitle;

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
		const cardImage = this._cardElement.querySelector('.elements__image');
		const likeButton = this._cardElement.querySelector('.elements__like-button');
		const trashButton = this._cardElement.querySelector('.elements__trash-button');
		const lightboxImg = imageLightboxPopup.querySelector('.popup__lightbox-image');
		const lightboxCaption = imageLightboxPopup.querySelector('.popup__lightbox-caption');

		likeButton.addEventListener('click', this._handleLikeCard);
		trashButton.addEventListener('click', this._handleDeleteCard);

		cardImage.addEventListener('click', evt => {
			lightboxImg.src = this._cardImage;
			lightboxImg.alt = this._cardTitle;
			lightboxCaption.textContent = this._cardTitle;
			togglePopup(imageLightboxPopup);
		})
	  }

	  _handleLikeCard(evt) {
		evt.target.closest('.elements__like-button').classList.toggle('elements__like-button_state_active');
	  }

	  _handleDeleteCard(evt) {
		this._cardElement.remove();
		this._cardElement = null;
	  }

  	generateCard = () => {
		const cardElement = this._getCardTemplate();
		this._cardElement = cardElement;	

		this._cardElement.querySelector('.elements__image').style.backgroundImage = `url('${this._cardImage}')`;
		this._cardElement.querySelector('.elements__name').textContent = this._cardTitle;

		this._addEventListeners();	
		return this._cardElement;
	  }
}

// Export to other module script files
export {Card};

