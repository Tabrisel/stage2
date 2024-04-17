import CreatorElement from '../components/creatorElement';
import TargetContainer from '../components/targetContainer';
import ButtonsGameComponent from '../components/gameButtons';
import { getUserData } from '../service/userPage/localStorage';
import HintButtons from '../components/hintButtons';
import { playSound } from '../service/gamePage/hints';

const WRAPPER_CLASS_NAME = 'page-wrapper';
const ACTIVE_CLASS_NAME = 'active';

export default class GamePageView {
    wrapper: HTMLElement;

    headerElement: HTMLElement;

    contentContainer: HTMLElement;

    sentenceContainer: HTMLElement;

    greetings: HTMLElement;

    sentenceTranslate: HTMLElement;

    soundTranslate: HTMLElement;

    targetContainer: TargetContainer;

    playerField: HTMLElement;

    targetField: HTMLElement | null = null;

    constructor() {
        const wrapperElement = new CreatorElement({
            tag: 'div',
            className: ['wrapperGamePage'],
        });
        this.wrapper = wrapperElement.getElement();
        this.wrapper.classList.add(WRAPPER_CLASS_NAME);

        this.greetings = new CreatorElement({
            tag: 'h3',
        }).getElement();
        this.headerElement = new CreatorElement({
            tag: 'header',
        }).getElement();
        this.sentenceTranslate = document.createElement('p');
        this.sentenceTranslate.className = 'sentenceTranslate';

        this.sentenceContainer = document.createElement('div');
        this.sentenceContainer.className = 'sentence';
        this.soundTranslate = document.createElement('div');
        this.soundTranslate.className = 'soundTranslate';
        this.soundTranslate.classList.add('appear');
        this.sentenceTranslate.classList.add('fallFromTop');
        this.soundTranslate.addEventListener('click', playSound);
        this.sentenceContainer.append(this.sentenceTranslate, this.soundTranslate);

        this.playerField = document.createElement('div');
        this.playerField.className = 'player-field';

        this.targetContainer = new TargetContainer();

        this.contentContainer = document.createElement('div');
        this.contentContainer.className = 'container';
    }

    render() {
        const userData = getUserData();
        if (userData) {
            this.greetings.textContent = `It’s good to see you, ${userData.userName} ${userData.userSurname}!`;
        }

        this.headerElement.appendChild(this.greetings);
        this.contentContainer.append(this.headerElement, this.sentenceContainer);
        this.targetContainer.render(this.contentContainer);
        this.contentContainer.append(this.playerField);
        this.setupButtons();
        this.wrapper.append(this.contentContainer);
        if (this.wrapper) {
            document.body.appendChild(this.wrapper);
            if (this.wrapper.classList.contains(ACTIVE_CLASS_NAME)) {
                this.wrapper.classList.remove(ACTIVE_CLASS_NAME);
            }
            setTimeout(() => {
                this.wrapper.classList.add(ACTIVE_CLASS_NAME);
            }, 0);
        }
    }

    private setupButtons() {
        const gameButtons = new ButtonsGameComponent();
        gameButtons.render(this.contentContainer);
        const hintButtons = new HintButtons();
        hintButtons.render(this.headerElement);
    }
}
