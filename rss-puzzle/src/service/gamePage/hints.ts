import { gamePageView } from './cards';
import { getLoadedData } from './dataStorage';

function translateSwitch(iconTranslate: HTMLElement) {
    const notActive = iconTranslate.classList.contains('notActive');

    if (!notActive) {
        gamePageView.sentenceTranslate.classList.remove('fallFromTop');
        if (gamePageView.sentenceTranslate instanceof HTMLInputElement) {
            gamePageView.sentenceTranslate.disabled = true;
        }
        iconTranslate.classList.add('notActive');
    }
    if (notActive) {
        gamePageView.sentenceTranslate.classList.add('fallFromTop');
        if (gamePageView.sentenceTranslate instanceof HTMLInputElement) {
            gamePageView.sentenceTranslate.disabled = false;
        }
        iconTranslate.classList.remove('notActive');
    }
}

function soundSwitch(iconSound: HTMLElement) {
    const notActive = iconSound.classList.contains('notActive');
    const soundTranslate = document.querySelector('.soundTranslate') as HTMLButtonElement;

    if (!notActive) {
        soundTranslate.classList.remove('appear');
        if (soundTranslate) {
            soundTranslate.disabled = true;
        }
        iconSound.classList.add('notActive');
    }
    if (notActive) {
        soundTranslate.classList.add('appear');
        if (soundTranslate) {
            soundTranslate.disabled = false;
        }
        iconSound.classList.remove('notActive');
    }
}

function playSound() {
    const audioUrl = getLoadedData()?.audioExample;
    const baseUrl = 'https://raw.githubusercontent.com/Tabrisel/rss-puzzle-data/main/';
    const audio = new Audio(baseUrl + audioUrl);
    const icon = document.querySelector('.soundTranslate') as HTMLElement;
    audio.play();
    audio.addEventListener('play', () => {
        if (icon) {
            icon.style.filter = 'brightness(150%)';
            icon.classList.add('pulse');
        }
    });
    audio.addEventListener('ended', () => {
        if (icon) {
            icon.style.filter = 'none';
            icon.classList.remove('pulse');
        }
    });
}

export { translateSwitch, soundSwitch, playSound };
