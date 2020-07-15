// Declare "Image Lightbox" modal elements
const imageLightboxPopup = document.querySelector('.popup__type_lightbox');
const lightboxCloseButton = imageLightboxPopup.querySelector('.popup__close-button');

// Declare global modal elements
const popupOverlays = document.querySelectorAll('.popup');

// Toggle popup modal display
function togglePopup(modal) {
	modal.classList.toggle('popup__opened');
	if (modal.classList.contains('popup__opened')) {
		document.addEventListener('keydown', escKey);
	} else {
		document.removeEventListener('keydown', escKey);
	}
}

// Create "Image Lightbox" event listeners
lightboxCloseButton.addEventListener('click', () => {
	togglePopup(imageLightboxPopup);
});

// Close each modal when clicking on overlay
popupOverlays.forEach((popupOverlay) => {
	popupOverlay.addEventListener('click', (evt) => {
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

// Export to other module script files
export {imageLightboxPopup, togglePopup}