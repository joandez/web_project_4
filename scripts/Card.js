import {imageLightboxPopup, lightboxImg, lightboxCaption} from "./index.js";
import {togglePopup} from './togglePopup.js';

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
			  .content
			  .querySelector('.elements__card')
			  .cloneNode(true);
			  
		return cardTemplate;
  }

  	_addEventListeners() {
		const cardImage = this._cardElement.querySelector('.elements__image');
		const likeButton = this._cardElement.querySelector('.elements__like-button');
		const trashButton = this._cardElement.querySelector('.elements__trash-button');

		cardImage.addEventListener('click', () => {
			togglePopup(imageLightboxPopup);
			lightboxImg.src = data.link;
			lightboxImg.alt = data.name;
			lightboxCaption.textContent = data.name;
		});
		
		likeButton.addEventListener('click', (evt) => {
			evt.target.closest('.elements__like-button').classList.toggle('elements__like-button_state_active');
		});
		
		trashButton.addEventListener('click', (evt) => {
			evt.target.closest('.elements__card').remove();
		});
	  }

  	generateCard = () => {
		this._getCardTemplate();
		this._cardElement = this._getCardTemplate();
		this._addEventListeners();		

		this._cardElement.querySelector('.elements__image').style.backgroundImage = `url('${this._cardImage}')`;
		this._cardElement.querySelector('.elements__name').textContent = this._cardTitle;

		return this._cardElement;
	  }
}

export {Card};