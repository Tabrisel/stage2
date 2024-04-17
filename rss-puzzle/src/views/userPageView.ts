import CreatorElement from '../components/creatorElement';
import HeaderComponent from '../components/header';
import TitleComponent from '../components/title';
import { handleStartButtonClick } from '../service/gamePage/cards';

const WRAPPER_CLASS_NAME = 'page-wrapper';
const ACTIVE_CLASS_NAME = 'active';

export default class UserPageView {
    wrapper: HTMLElement;

    constructor() {
        const wrapperElement = new CreatorElement({
            tag: 'div',
            className: ['wrapperUserPage'],
        });
        this.wrapper = wrapperElement.getElement();
        this.wrapper.classList.add(WRAPPER_CLASS_NAME);
    }

    render() {
        this.setupElements();
        this.setupEventListeners();
        this.appendElementsToDOM();
        this.addActiveClassToWrapper();
    }

    private setupElements() {
        const headerComponent = new HeaderComponent();
        headerComponent.render(this.wrapper);

        const titleComponent = new TitleComponent();
        titleComponent.render(this.wrapper);
    }

    private setupEventListeners() {
        const startButton = this.wrapper.querySelector('.start-button') as HTMLElement;
        startButton.addEventListener('click', handleStartButtonClick);
    }

    private addActiveClassToWrapper() {
        setTimeout(() => {
            this.wrapper.classList.add(ACTIVE_CLASS_NAME);
        }, 0);
    }

    private appendElementsToDOM() {
        document.body.appendChild(this.wrapper);
    }
}
