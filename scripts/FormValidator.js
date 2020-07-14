class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._formElement = formElement;
    }

    _showErrorMessage(input, errorMessage) {
        const error = this._formElement.querySelector('#' + input.id + '-error');
        input.classList.add(this._inputErrorClass);
        error.textContent = input.validationMessage;
        
        error.classList.add(this._errorClass);
    
    }

    _hideErrorMessage(input) {
        const error = this._formElement.querySelector('#' + input.id + '-error');
        input.classList.remove(this._inputErrorClass);
        error.classList.remove(this._errorClass);
        error.textContent = '';
    }

    _checkInputValidity(input, form) {
        if(input.validity.valid) {
            hideErrorMessage(input, form);
        } else{
            showErrorMessage(input, form);
        }
    }

    _toggleButtonState(inputs, button, inactiveButtonClass) {
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

    enableValidation(inputSelector, submitButtonSelector) {
        this._formElement.addEventListener('submit', ((evt) => {
			evt.preventDefault();
        }));
        
        this._setEventListeners();
    }	
}

// export
export {FormValidator};