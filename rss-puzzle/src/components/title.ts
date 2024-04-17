import CreatorElement from './creatorElement';

export default class TitleComponent {
    titleGame: HTMLElement;

    welcomeHeader: HTMLElement;

    describe: HTMLElement;

    startButton: HTMLElement;

    constructor() {
        this.titleGame = new CreatorElement({
            tag: 'div',
            className: ['titleGame'],
        }).getElement();

        this.welcomeHeader = new CreatorElement({
            tag: 'h1',
            content: 'Welcome to RSS Puzzle!',
        }).getElement();

        this.describe = new CreatorElement({
            tag: 'p',
            content:
                "It is an interactive mini-game aimed at enhancing English language skills. Players assemble sentences from jumbled words, inspired by Lingualeo's Phrase Constructor training. The game integrates various levels of difficulty, hint options, and a unique puzzle-like experience with artwork.",
        }).getElement();

        this.startButton = new CreatorElement({
            tag: 'button',
            className: ['start-button'],
            content: 'Start',
        }).getElement();

        this.titleGame.appendChild(this.welcomeHeader);
        this.titleGame.appendChild(this.describe);
        this.titleGame.appendChild(this.startButton);
    }

    render(parent: HTMLElement) {
        const titleGame: HTMLElement | null = parent.querySelector('.titleGame');
        if (!titleGame) {
            parent.appendChild(this.titleGame);
        }
    }
}
