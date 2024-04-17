import CreatorElement from './creatorElement';
import { handleLogout, getUserData } from '../service/userPage/localStorage';

export default class HeaderComponent {
    greetings: HTMLElement;

    logoutButton: HTMLElement;

    constructor() {
        this.greetings = new CreatorElement({
            tag: 'h2',
            content: `It’s good to see you, ${getUserData().userName} ${getUserData().userSurname}!`,
        }).getElement();

        this.logoutButton = new CreatorElement({
            tag: 'button',
            className: ['button-exit'],
            content: 'Logout',
        }).getElement();

        this.logoutButton.addEventListener('click', handleLogout);
    }

    render(parent: HTMLElement) {
        let headerElement: HTMLElement | null = parent.querySelector('header');
        if (!headerElement) {
            headerElement = new CreatorElement({
                tag: 'header',
            }).getElement();

            headerElement.appendChild(this.greetings);
            headerElement.appendChild(this.logoutButton);
            parent.appendChild(headerElement);
        }
    }
}
