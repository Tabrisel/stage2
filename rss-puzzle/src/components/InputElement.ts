import CreatorElement from './creatorElement';

type InputElementHTML = {
    tag: string;
    className?: string[];
    attribute?: { name: string; value?: string };
    content?: string;
    callback?: () => void;
    pattern?: string;
    title?: string;
};

class InputCreatorElement extends CreatorElement {
    constructor(options: InputElementHTML) {
        super(options);
        if (options.pattern) {
            this.setAttribute('pattern', options.pattern);
        }
        if (options.title) {
            this.setAttribute('title', options.title);
        }
    }
}

export default InputCreatorElement;
