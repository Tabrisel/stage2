// inputs.ts
import CreatorElement from './creatorElement';
import InputCreatorElement from './InputElement';
import { addInputEventListeners } from '../service/loginPage/validation';

const labelName = new CreatorElement({
    tag: 'label',
    className: ['label'],
    content: 'First Name:',
    attribute: { name: 'for', value: 'inputName' },
}).getElement();

const labelLastName = new CreatorElement({
    tag: 'label',
    className: ['label'],
    content: 'Surname:',
    attribute: { name: 'for', value: 'inputLastName' },
}).getElement();

const inputName = new InputCreatorElement({
    tag: 'input',
    className: ['inputFields'],
    attribute: { name: 'required' },
    content: '',
}).getElement();

const inputLastName = new InputCreatorElement({
    tag: 'input',
    className: ['inputFields'],
    attribute: { name: 'required' },
    content: '',
}).getElement();

inputName.setAttribute('id', 'inputName');
inputName.setAttribute('autocomplete', 'off');
inputLastName.setAttribute('id', 'inputLastName');
inputLastName.setAttribute('autocomplete', 'off');

addInputEventListeners(inputName as HTMLInputElement, inputLastName as HTMLInputElement);

export { inputName, inputLastName, labelName, labelLastName };
