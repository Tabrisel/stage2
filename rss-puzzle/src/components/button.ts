import CreatorElement from './creatorElement';

const buttonSubmit = new CreatorElement({
    tag: 'button',
    className: ['button'],
    attribute: { name: 'type', value: 'submit' },
    content: 'Login',
});

buttonSubmit.setAttribute('disabled', '');

export default buttonSubmit;
