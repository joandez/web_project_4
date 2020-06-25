// Declare global modal elements
	const popupOverlays = document.querySelectorAll('.popup');

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

// Declare "Image Lightbox" modal elements
	const imageLightboxPopup = document.querySelector('.popup__type_lightbox');
	const lightboxCloseButton = imageLightboxPopup.querySelector('.popup__close-button');

	const lightboxImg = imageLightboxPopup.querySelector('.popup__lightbox-image');
	const lightboxCaption = imageLightboxPopup.querySelector('.popup__lightbox-caption');

// Find Locations grid and Card template
	const elementGrid = document.querySelector('.elements__grid');
	const cardTemplate = document.querySelector('.card-template').content.querySelector('.elements__card');


// Declare data for initial Location cards

	const initialCards = [
		{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
		},
		{
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
		},
		{
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
		},
    	{
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
		},
    	{
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
		},
		{
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
		}
	];

// Toggle popup modal display
	function togglePopup(modal) {
		modal.classList.toggle('popup__opened');
	};


// Create Location cards

	const createCard = (data) => {
		const cardItem = cardTemplate.cloneNode(true);
	
		const cardTitle = cardItem.querySelector('.elements__name');
		const cardImage = cardItem.querySelector('.elements__image');
		const likeButton = cardItem.querySelector('.elements__like-button');
		const trashButton = cardItem.querySelector('.elements__trash-button');
	
		cardTitle.textContent = data.name;
		cardImage.style.backgroundImage = `url('${data.link}')`;
		cardImage.addEventListener('click', () => {
			togglePopup(imageLightboxPopup);
			lightboxImg.src = data.link;
			lightboxCaption.textContent = data.name;
		});
	
		likeButton.addEventListener('click', (evt) => {
			evt.target.closest('.elements__like-button').classList.toggle('elements__like-button_state_active');
		});
	
		trashButton.addEventListener('click', (evt) => {
			evt.target.closest('.elements__card').remove();
		});
	
		return cardItem;
	};

	const renderCard = (data) => {
		elementGrid.prepend(createCard(data));
	};

	initialCards.forEach((data) => {
		renderCard(data);
	});

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
		const data = {
			name: locationNameInput.value,
			link: locationLinkInput.value,
		};
		
		createCard(data);
		renderCard(data);
		locationForm.reset();
		togglePopup(locationPopup);
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

// Create "Image Lightbox" event listeners
	lightboxCloseButton.addEventListener('click', () => {
		togglePopup(imageLightboxPopup);
	});


// Close each modal when clicking on overlay or pressing esc

	popupOverlays.forEach((popupOverlay) => {
		popupOverlay.addEventListener('click', function(evt) {
			if (evt.target === popupOverlay) {
				togglePopup(evt.target);	
			}
		})
		
		document.addEventListener('keydown', (evt) => {
			if (evt.keyCode === 27) {
				popupOverlay.classList.remove('popup__opened');
			}
		})	
		
	});