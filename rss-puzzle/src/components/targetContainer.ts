import CreatorElement from './creatorElement';

export default class TargetContainer {
    targetContainer: HTMLElement;

    targetFields: HTMLElement[];

    constructor() {
        this.targetContainer = new CreatorElement({
            tag: 'div',
            className: ['targetContainer'],
        }).getElement();

        this.targetFields = [];

        for (let i = 0; i < 10; i += 1) {
            const targetField = new CreatorElement({
                tag: 'div',
                className: ['targetField'],
            }).getElement();

            this.targetFields.push(targetField);
            this.targetContainer.appendChild(targetField);
            this.targetFields[0].classList.add('target_active');
        }
    }

    render(parent: HTMLElement) {
        parent.appendChild(this.targetContainer);
    }

    setInnerHTML(): void {
        this.targetContainer.innerHTML = '';
    }
}
