// Create FormValidator class
class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._formElement = formElement;
    }

    _showErrorMessage(input) {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        error.textContent = input.validationMessage;
        
        error.classList.add(this._errorClass);
    
    }

    _hideErrorMessage(input) {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        error.classList.remove(this._errorClass);
        error.textContent = '';
    }

    _checkInputValidity(input) {
        if(input.validity.valid) {
            this._hideErrorMessage(input);
        } else{
            this._showErrorMessage(input);
        }
    }

    _toggleButtonState(inputs, button) {
        const isValid = inputs.every((input) => input.validity.valid)
	
        if(isValid) {
            button.classList.remove(this._inactiveButtonClass);
            button.disabled = false;
        } else{
            button.classList.add(this._inactiveButtonClass);
            button.disabled = true;
        }
    }

    _setEventListeners() {
        const inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
		const button = this._formElement.querySelector(this._submitButtonSelector);
		
		inputs.forEach((input) => {
			input.addEventListener('input', () => {
				this._checkInputValidity(input);
				this._toggleButtonState(inputs, button);
            })
        })
    }

    enableValidation() {
        this._formElement.addEventListener('submit', ((evt) => {
			evt.preventDefault();
        }));
        
        this._setEventListeners();
    }	
}

// Export to other module script files
export {FormValidator};