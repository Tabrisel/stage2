import CreatorElement from './creatorElement';
import { translateSwitch, soundSwitch } from '../service/gamePage/hints';
import { handleLogout } from '../service/userPage/localStorage';

export default class HintButtons {
    hintButtons: HTMLElement;

    logoutButton: HTMLElement;

    iconTranslate: HTMLElement;

    iconSound: HTMLElement;

    constructor() {
        this.hintButtons = new CreatorElement({
            tag: 'div',
            className: ['hintButtons'],
        }).getElement();

        this.logoutButton = new CreatorElement({
            tag: 'button',
            className: ['button-exit'],
            content: 'Logout',
        }).getElement();

        this.logoutButton.addEventListener('click', handleLogout);

        this.iconSound = document.createElement('div');
        this.iconSound.classList.add('iconSound');

        this.iconTranslate = document.createElement('div');
        this.iconTranslate.classList.add('iconTranslate');
        this.iconTranslate.addEventListener('click', () => translateSwitch(this.iconTranslate));
        this.iconSound.addEventListener('click', () => soundSwitch(this.iconSound));

        this.hintButtons.append(this.iconSound);
        this.hintButtons.append(this.iconTranslate);
        this.hintButtons.append(this.logoutButton);
    }

    render(parent: HTMLElement) {
        parent.appendChild(this.hintButtons);
    }
}
