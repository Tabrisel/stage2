import CreatorElement from '../components/creatorElement';
import formElement from '../components/form';

const WRAPPER_CLASS_NAME = 'page-wrapper';
const ACTIVE_CLASS_NAME = 'active';

class LoginPageView {
    wrapper: HTMLElement;

    formElement: HTMLFormElement;

    constructor() {
        const wrapperElement = new CreatorElement({
            tag: 'div',
            className: ['wrapperLoginPage'],
        }).getElement();
        this.wrapper = wrapperElement;

        this.wrapper.classList.add(WRAPPER_CLASS_NAME);

        this.formElement = formElement;

        if (this.wrapper) {
            this.wrapper.appendChild(this.formElement);
        }
    }

    render() {
        if (this.wrapper) {
            document.body.appendChild(this.wrapper);
            setTimeout(() => {
                this.wrapper.classList.add(ACTIVE_CLASS_NAME);
            }, 0);
        }
    }
}

export default LoginPageView;
