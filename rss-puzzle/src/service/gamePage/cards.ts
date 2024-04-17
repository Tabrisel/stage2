import GamePageView from '../../views/gamePageView';
import { getLoadedData, fetchDataGame, nextLevel, Data } from './dataStorage';
import { userPageView } from '../../controller/app';
import swapNodes from '../../utils/changeNodes';

const userArray: string[] = [];
const ACTIVE_CLASS_NAME = 'active';
const gamePageView = new GamePageView();

function handleContinueButtonState(continueButton: HTMLButtonElement, iconTranslate: HTMLElement) {
    const notActive = iconTranslate.classList.contains('notActive');
    const iconSound = document.querySelector('.iconSound') as HTMLButtonElement;
    const soundTranslate = document.querySelector('.soundTranslate') as HTMLButtonElement;

    const notActiveSound = iconSound.classList.contains('notActive');
    if (notActive) {
        gamePageView.sentenceTranslate.classList.toggle('fallFromTop');
    }
    if (notActiveSound) {
        soundTranslate.classList.toggle('appear');
    }
}

async function checkButtonState() {
    try {
        const loadedData = getLoadedData();
        if (loadedData) {
            const { rightArray } = getLoadedData() || { rightArray: [] };
            const userArrayLength = userArray.filter((item: string) => item !== '-').length;
            const hasEmptyValue = userArray.includes('-');
            const checkButton = document.querySelector('.checkButton') as HTMLButtonElement;
            const continueButton = document.querySelector('.continueButton') as HTMLButtonElement;
            if (rightArray.length === userArrayLength && !hasEmptyValue) {
                checkButton.disabled = false;
                checkButton.classList.add('shake');
            } else {
                checkButton.disabled = true;
                checkButton.classList.remove('shake');
                continueButton.disabled = true;
            }
            const targetField = document.querySelector('.target_active') as HTMLElement;
            const playerField = document.querySelector('.player-field') as HTMLElement;
            if (targetField && playerField) {
                const wordCards = Array.from(targetField.children) as HTMLElement[];
                wordCards.forEach((card) => {
                    card.classList.remove('wrongAnswer');
                });
                const playerCards = Array.from(playerField.children) as HTMLElement[];
                playerCards.forEach((card) => {
                    card.classList.remove('wrongAnswer');
                });
            }
        } else {
            console.error('Error fetching data: No data loaded');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function disableAuto() {
    const autoButton = document.querySelector('.autoButton') as HTMLButtonElement;
    if (autoButton) {
        autoButton.disabled = true;
    }
}

function checkSentence() {
    const { rightArray } = getLoadedData() || { rightArray: [] };
    const userWordsCopy = [...userArray];
    const wrongIndices: number[] = [];
    rightArray.forEach((word, index) => {
        if (userWordsCopy[index] !== word) {
            wrongIndices.push(index);
        }
    });

    const targetField = document.querySelector('.target_active') as HTMLElement;

    if (targetField) {
        const wordCards = Array.from(targetField.children) as HTMLElement[];
        wordCards.forEach((card, index) => {
            if (wrongIndices.includes(index)) {
                card.classList.add('wrongAnswer');
            } else {
                card.classList.remove('wrongAnswer');
            }
        });
    }

    const continueButton = document.querySelector('.continueButton') as HTMLButtonElement;
    const checkButton = document.querySelector('.checkButton') as HTMLButtonElement;

    if (continueButton) {
        continueButton.disabled = wrongIndices.length !== 0;
    }
    if (wrongIndices.length === 0) {
        disableAuto();
        continueButton.classList.add('showButton');
        checkButton.classList.add('hideButton');
        const iconTranslate = document.querySelector('.iconTranslate') as HTMLElement;
        handleContinueButtonState(continueButton, iconTranslate);
    } else {
        continueButton.classList.remove('showButton');
        checkButton.classList.remove('hideButton');
    }
}

function searchIndex(field: HTMLElement, target: HTMLElement) {
    field.addEventListener('click', (event: Event) => {
        event.stopImmediatePropagation();
        const wordCards = Array.from(field.children) as HTMLElement[];
        const clickedCard = event.target as HTMLElement;
        const index = wordCards.indexOf(clickedCard);

        const targetActive = document.querySelector('.target_active') as HTMLElement;
        if (targetActive) {
            const firstEmptyElement = Array.from(targetActive.children).find((element) =>
                element.classList.contains('empty')
            ) as HTMLElement | undefined;

            if (firstEmptyElement && index !== -1 && clickedCard.classList.contains('wordCard')) {
                const firstFreeIndex = userArray.indexOf('-');
                if (firstFreeIndex !== -1) {
                    userArray[firstFreeIndex] = clickedCard.innerText;
                } else {
                    userArray.push(clickedCard.innerText);
                }

                swapNodes(clickedCard, firstEmptyElement);
                clickedCard.classList.add('wordCard');
                clickedCard.classList.remove('empty');
                firstEmptyElement.classList.add('empty');
                firstEmptyElement.classList.remove('wordCard');

                checkButtonState();
                clickedCard.classList.add('fallFromTop');
            } else {
                console.error('Clicked card is not valid or not found.');
                console.log(target);
            }
        } else {
            console.error('Active targetField not found.');
        }
    });
}

function searchReverseIndex(field: HTMLElement, target: HTMLElement) {
    target.addEventListener('click', (event: Event) => {
        event.stopImmediatePropagation();

        const wordCards = Array.from(target.children) as HTMLElement[];
        const clickedCard = event.target as HTMLElement;
        const indexFindWord = userArray.indexOf(clickedCard.innerText);

        if (indexFindWord !== -1 && clickedCard.classList.contains('wordCard')) {
            userArray[indexFindWord] = '-';

            const index = wordCards.indexOf(clickedCard);

            if (index !== -1) {
                const firstFreeIndex = Array.from(field.children).find((element) =>
                    element.classList.contains('empty')
                ) as HTMLElement;
                if (firstFreeIndex) {
                    swapNodes(clickedCard, firstFreeIndex);
                    clickedCard.classList.add('wordCard');
                    clickedCard.classList.remove('empty');
                    firstFreeIndex.classList.add('empty');
                    firstFreeIndex.classList.remove('wordCard');
                }
            }
            checkButtonState();
        }
    });
}

function calculateAverageCardWidth(mixedWords: string[], containerWidth: number): number {
    return containerWidth / mixedWords.reduce((acc, word) => acc + word.length, 0);
}

function createEmptyElement(word: string, totalExampleWordLength: number, containerWidth: number): HTMLElement {
    const padding = 5;
    const minCardWidth = 100;
    const maxCardWidth = 200;

    const fakeElement = document.createElement('div');
    fakeElement.className = 'empty';
    const fakeCardWidth = Math.max(
        minCardWidth,
        Math.min(maxCardWidth, (word.length / totalExampleWordLength) * (containerWidth - padding * 2))
    );
    fakeElement.style.width = `${fakeCardWidth}px`;
    fakeElement.style.padding = `0 ${padding}px`;

    return fakeElement;
}

function createWordCard(
    word: string,
    averageCardWidth: number,
    minCardWidth: number,
    maxCardWidth: number
): HTMLElement {
    const wordElement = document.createElement('div');
    wordElement.textContent = word;
    wordElement.className = 'wordCard';
    const adjustedCardWidth = Math.min(maxCardWidth, Math.max(minCardWidth, word.length * averageCardWidth));
    wordElement.style.width = `${adjustedCardWidth}px`;

    return wordElement;
}

function insertWords(
    mixedWords: string[],
    playerField: HTMLElement,
    targetField: HTMLElement,
    textExample: string,
    textExampleTranslate: string,
    containerWidth: number
) {
    while (playerField.firstChild) {
        playerField.removeChild(playerField.firstChild);
    }
    while (targetField.firstChild) {
        targetField.removeChild(targetField.firstChild);
    }

    const exampleWords = textExample.split(' ');
    const totalExampleWordLength = exampleWords.reduce((acc, word) => acc + word.length, 0);
    const averageCardWidth = calculateAverageCardWidth(mixedWords, containerWidth);
    exampleWords.forEach((word) => {
        const fakeElement = createEmptyElement(word, totalExampleWordLength, containerWidth);
        targetField.appendChild(fakeElement);
    });
    mixedWords.forEach((word) => {
        const wordElement = createWordCard(word, averageCardWidth, 100, 200);
        wordElement.classList.add('wordCard');
        playerField.appendChild(wordElement);
    });
    gamePageView.sentenceTranslate.textContent = textExampleTranslate;

    searchIndex(playerField, targetField);
    searchReverseIndex(playerField, targetField);
}

function handleStartButtonClick() {
    gamePageView.render();
    fetchDataGame();
    userPageView.wrapper.classList.remove(ACTIVE_CLASS_NAME);
}

function animateWordCards(wordCards: HTMLElement[], targetField: HTMLElement) {
    wordCards.forEach((card) => {
        card.classList.add('fall');
        card.addEventListener('animationend', () => {
            targetField.removeChild(card);
        });
    });
}

function processLoadedData(loadedData: Data) {
    const { rightArray } = loadedData;
    const targetField = document.querySelector('.target_active') as HTMLElement;
    const playerField = document.querySelector('.player-field') as HTMLElement;
    const checkButton = document.querySelector('.checkButton') as HTMLButtonElement;
    const continueButton = document.querySelector('.continueButton') as HTMLButtonElement;
    if (targetField && playerField && checkButton && continueButton) {
        const wordCards = Array.from(targetField.children) as HTMLElement[];
        animateWordCards(wordCards, targetField);
        targetField.innerHTML = '';
        setTimeout(() => {
            rightArray.forEach((word: string) => {
                const wordElement = createWordCard(word, 100, 100, 200);
                wordElement.classList.add('fallFromTop');
                targetField.appendChild(wordElement);
            });
            userArray.length = 0;
            rightArray.forEach((word: string) => {
                userArray.push(word);
            });
            checkButtonState();
            const allElements = document.querySelectorAll('.player-field .wordCard') as NodeListOf<HTMLElement>;
            const target = document.querySelector('.target_active');
            allElements.forEach((element) => {
                element.classList.add('cantMoveBlock');
            });
            if (target) {
                target.querySelectorAll('div').forEach((item) => {
                    item.classList.add('cantMove');
                });
            }
            checkButton.classList.add('hideButton');
            continueButton.classList.add('showButton');
            continueButton.disabled = false;
            const iconTranslate = document.querySelector('.iconTranslate') as HTMLElement;
            handleContinueButtonState(continueButton, iconTranslate);
        }, 500);
    }
}

function handleAutoButtonClick(button: HTMLButtonElement) {
    const loadedData = getLoadedData();
    const buttonToDisable = button;

    if (loadedData) {
        processLoadedData(loadedData);
    }

    buttonToDisable.disabled = true;
}

function handleContinueButtonClick() {
    const autoButton = document.querySelector('.autoButton') as HTMLButtonElement;
    if (autoButton) {
        autoButton.disabled = false;
    }
    nextLevel();
    checkButtonState();
    userArray.length = 0;

    const currentActiveTarget = document.querySelector('.target_active') as HTMLElement;
    if (currentActiveTarget) {
        currentActiveTarget.classList.remove('target_active');

        const nextTarget = currentActiveTarget.nextElementSibling as HTMLElement;
        if (nextTarget) {
            nextTarget.classList.add('target_active');
        } else {
            const firstTarget = document.querySelector('.target-field') as HTMLElement;
            if (firstTarget) {
                firstTarget.classList.add('target_active');
            }
        }
    }

    const checkButton = document.querySelector('.checkButton') as HTMLButtonElement;
    const continueButton = document.querySelector('.continueButton') as HTMLButtonElement;
    const iconTranslate = document.querySelector('.iconTranslate') as HTMLElement;
    handleContinueButtonState(continueButton, iconTranslate);

    if (checkButton) {
        checkButton.disabled = true;
    }
    continueButton.classList.remove('showButton');
    checkButton.classList.remove('hideButton');
}

export {
    insertWords,
    checkButtonState,
    handleStartButtonClick,
    gamePageView,
    checkSentence,
    handleContinueButtonClick,
    handleAutoButtonClick,
    handleContinueButtonState,
};
