import buttonSubmit from '../../components/button';

function isValidEnglishAlphabet(input: string): boolean {
    return /^[A-Za-z-]+$/.test(input);
}

function isFirstLetterUppercase(input: string): boolean {
    return /^[A-Z]/.test(input);
}

function hasMinimumLength(input: string, minLength: number): boolean {
    return input.length >= minLength;
}

function showValidationMessage(input: HTMLInputElement, message: string) {
    input.classList.add('noValid');
    if (input.validationMessage !== message) {
        input.setCustomValidity(message);
        input.reportValidity();
    }
}

function toggleSubmitButton(inputNameElement: HTMLInputElement, inputLastNameElement: HTMLInputElement) {
    if (inputNameElement && inputLastNameElement) {
        const firstNameValid = inputNameElement.checkValidity();
        const lastNameValid = inputLastNameElement.checkValidity();

        if (firstNameValid && lastNameValid) {
            buttonSubmit.removeAttribute('disabled');
            inputNameElement.classList.remove('noValid');
            inputLastNameElement.classList.remove('noValid');
        } else {
            buttonSubmit.setAttribute('disabled', '');
        }
    }
}

function addInputEventListeners(inputNameElement: HTMLInputElement, inputLastNameElement: HTMLInputElement) {
    inputNameElement.addEventListener('input', () => {
        const inputValue = inputNameElement.value;
        if (!inputValue.trim()) {
            inputNameElement.classList.remove('noValid');
            return;
        }
        if (!isValidEnglishAlphabet(inputValue)) {
            showValidationMessage(inputNameElement, 'Only English alphabet letters and hyphen are allowed.');
        } else if (!isFirstLetterUppercase(inputValue)) {
            showValidationMessage(inputNameElement, 'First letter should be uppercase.');
        } else if (!hasMinimumLength(inputValue, 3)) {
            showValidationMessage(inputNameElement, 'Minimum length is 3 characters.');
        } else {
            inputNameElement.setCustomValidity('');
            inputNameElement.classList.remove('noValid');
            toggleSubmitButton(inputNameElement, inputLastNameElement);
        }
    });

    inputLastNameElement.addEventListener('input', () => {
        const inputValue = inputLastNameElement.value;
        if (!inputValue.trim()) {
            inputLastNameElement.classList.remove('noValid');
            return;
        }
        if (!isValidEnglishAlphabet(inputValue)) {
            showValidationMessage(inputLastNameElement, 'Only English alphabet letters and hyphen are allowed.');
        } else if (!isFirstLetterUppercase(inputValue)) {
            showValidationMessage(inputLastNameElement, 'First letter should be uppercase.');
        } else if (!hasMinimumLength(inputValue, 4)) {
            showValidationMessage(inputLastNameElement, 'Minimum length is 4 characters.');
        } else {
            inputLastNameElement.setCustomValidity('');
            inputLastNameElement.classList.remove('noValid');
            toggleSubmitButton(inputNameElement, inputLastNameElement);
        }
    });
}

export {
    isValidEnglishAlphabet,
    isFirstLetterUppercase,
    hasMinimumLength,
    showValidationMessage,
    toggleSubmitButton,
    addInputEventListeners,
};
