type ElementHTML = {
    tag: string;
    className?: string[];
    attribute?: { name: string; value?: string };
    content?: string;
    callback?: () => void;
};

export default class CreatorElement {
    protected element: HTMLElement;

    constructor(options: ElementHTML) {
        this.element = document.createElement(options.tag);
        this.setClass(options.className);
        if (options.attribute) {
            this.setAttribute(options.attribute.name, options.attribute.value);
        }
        this.setContent(options.content);
        this.setCallback(options.callback);
    }

    getElement() {
        return this.element;
    }

    setContent(content = '') {
        this.element.textContent = content;
    }

    setAttribute(attributeName: string, attributeValue?: string) {
        this.element.setAttribute(attributeName, attributeValue || '');
    }

    removeAttribute(attributeName: string) {
        this.element.removeAttribute(attributeName);
    }

    setCallback(callback?: () => void) {
        if (callback) {
            this.element.addEventListener('click', callback);
        }
    }

    setClass(className?: string[]) {
        if (className) {
            this.element.classList.add(...className);
        }
    }

    append(...children: Node[]) {
        children.forEach((child) => {
            this.element.appendChild(child);
        });
    }

    getHTMLInputValue(): string | null {
        if (this.element instanceof HTMLInputElement) {
            return this.element.value;
        }
        return null;
    }
}
