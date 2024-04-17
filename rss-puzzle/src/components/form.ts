import { handleSubmit } from '../service/userPage/localStorage';
import CreatorElement from './creatorElement';
import { labelName, inputName, labelLastName, inputLastName } from './inputs';
import buttonSubmit from './button';

const formElement = new CreatorElement({
    tag: 'form',
    className: ['loginForm'],
}).getElement() as HTMLFormElement;

formElement.addEventListener('submit', handleSubmit);

const elementsToAdd = [labelName, inputName, labelLastName, inputLastName, buttonSubmit.getElement()];

elementsToAdd.forEach((element) => formElement.appendChild(element));

export default formElement;
