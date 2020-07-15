// Declare "Image Lightbox" modal elements
const imageLightboxPopup = document.querySelector('.popup__type_lightbox');
const lightboxCloseButton = imageLightboxPopup.querySelector('.popup__close-button');

// Declare global modal elements
const popupOverlays = document.querySelectorAll('.popup');


// Create "Image Lightbox" event listeners
lightboxCloseButton.addEventListener('click', () => {
	togglePopup(imageLightboxPopup);
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

// Export to other module script files
export {imageLightboxPopup, togglePopup}