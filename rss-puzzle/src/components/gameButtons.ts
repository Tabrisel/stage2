import { checkSentence, handleContinueButtonClick, handleAutoButtonClick } from '../service/gamePage/cards';

export default class ButtonsGameComponent {
    gameButtons: HTMLElement;

    constructor() {
        this.gameButtons = document.createElement('div');
        this.gameButtons.className = 'gameButtons';

        const checkButton = document.createElement('button');
        checkButton.textContent = 'Check';
        checkButton.className = 'checkButton';
        checkButton.setAttribute('disabled', '');
        checkButton.addEventListener('click', checkSentence);

        const continueButton = document.createElement('button');
        continueButton.textContent = 'Continue';
        continueButton.className = 'continueButton';
        continueButton.setAttribute('disabled', '');
        continueButton.addEventListener('click', handleContinueButtonClick);

        const autoButton = document.createElement('button');
        autoButton.textContent = 'Auto-Complete';
        autoButton.className = 'autoButton';
        autoButton.addEventListener('click', () => handleAutoButtonClick(autoButton));

        this.gameButtons.appendChild(continueButton);
        this.gameButtons.appendChild(checkButton);
        this.gameButtons.appendChild(autoButton);
    }

    render(parent: HTMLElement) {
        parent.appendChild(this.gameButtons);
    }
}
