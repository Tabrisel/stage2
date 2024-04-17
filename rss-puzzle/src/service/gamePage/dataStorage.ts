import { gamePageView, insertWords } from './cards';
import mixedArray from '../../utils/mixArray';

export interface Data {
    textExample: string;
    audioExample: string;
    textExampleTranslate: string;
    mixedWords: string[];
    rightArray: string[];
}

let loadedDataArray: Data[] = [];
let currentTargetFieldIndex: number = 0;

function getLoadedData(): Data | null {
    return loadedDataArray[currentTargetFieldIndex] || null;
}

function clearAllTargetFields() {
    gamePageView.targetContainer.targetFields.forEach((field) => {
        field.classList.remove('target_active');
        while (field.firstChild) {
            field.removeChild(field.firstChild);
        }
    });

    const firstTarget = gamePageView.targetContainer.targetFields[0];
    if (firstTarget) {
        firstTarget.classList.add('target_active');
        const loadedData = getLoadedData();
        if (loadedData) {
            const firstSentence: string = loadedData.textExample;
            insertWords(
                loadedData.mixedWords,
                gamePageView.playerField,
                firstTarget,
                firstSentence,
                loadedData.textExampleTranslate,
                700
            );
        }
    }
}

async function loadRandomRound() {
    const response = await fetch(
        'https://raw.githubusercontent.com/Tabrisel/rss-puzzle-data/main/data/wordCollectionLevel1.json'
    );
    const { rounds } = await response.json();
    const randomRoundIndex: number = Math.floor(Math.random() * rounds.length);
    const randomRound: { words: Data[] } = rounds[randomRoundIndex];
    const sentences: Data[] = randomRound.words;
    if (!sentences || sentences.length === 0) {
        console.error('No sentences found in the round.');
        return;
    }
    const selectedSentences: Data[] = sentences.slice(0, 10);
    loadedDataArray = selectedSentences.map((sentence: Data) => {
        const { textExample, audioExample, textExampleTranslate } = sentence;
        const rightArray: string[] = sentence.textExample.split(' ');
        const mixedWords: string[] = mixedArray(rightArray);
        return { textExample, audioExample, textExampleTranslate, mixedWords, rightArray };
    });
}

function updateGameView(loadedData: Data | null) {
    if (!loadedData) return;
    gamePageView.sentenceTranslate.textContent = '';
    gamePageView.sentenceTranslate.textContent = loadedData.textExampleTranslate;
    const firstSentence: string = loadedData.textExample;
    insertWords(
        loadedData.mixedWords,
        gamePageView.playerField,
        gamePageView.targetContainer.targetFields[currentTargetFieldIndex],
        firstSentence,
        loadedData.textExampleTranslate,
        700
    );
}

async function fetchDataGame(): Promise<Data | null> {
    try {
        if (loadedDataArray.length === 0) {
            await loadRandomRound();
            clearAllTargetFields();
        }
        const loadedData = loadedDataArray[currentTargetFieldIndex];
        updateGameView(loadedData);
        return loadedData;
    } catch (error) {
        console.error('Error fetching and parsing data:', error);
        return null;
    }
}

function nextLevel() {
    currentTargetFieldIndex += 1;
    if (currentTargetFieldIndex < loadedDataArray.length) {
        const loadedData = loadedDataArray[currentTargetFieldIndex];
        if (loadedData && loadedData.textExample) {
            updateGameView(loadedData);
        } else {
            console.error('Loaded data or textExample is undefined.');
        }
    } else {
        console.log('All levels completed!');
        clearAllTargetFields();
        loadedDataArray.splice(0, 10);
        currentTargetFieldIndex = 0;
        if (loadedDataArray.length === 0) {
            fetchDataGame();
        } else {
            const loadedData = loadedDataArray[currentTargetFieldIndex];
            if (loadedData && loadedData.textExample) {
                updateGameView(loadedData);
            } else {
                console.error('Loaded data or textExample is undefined.');
            }
        }
    }
}

export { fetchDataGame, getLoadedData, nextLevel, clearAllTargetFields };
