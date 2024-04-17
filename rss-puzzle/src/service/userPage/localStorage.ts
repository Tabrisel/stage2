import { inputName, inputLastName } from '../../components/inputs';
import LoginPageView from '../../views/loginPageView';
import { userPageView } from '../../controller/app';

type LocalData = {
    firstName: string;
    surname: string;
};

function getUserData(): { userName: string | null; userSurname: string | null } {
    const userDataString = localStorage.getItem('user');
    let userName: string | null = null;
    let userSurname: string | null = null;

    if (userDataString) {
        const userData: LocalData = JSON.parse(userDataString);
        userName = userData.firstName;
        userSurname = userData.surname;
    }

    return { userName, userSurname };
}

function removeFormElement(): void {
    document.body.innerHTML = '';
    userPageView.render();
}

function removeUserPage(): void {
    document.body.innerHTML = '';
    const loginPageView = new LoginPageView();
    loginPageView.render();
}

function saveUserDataToLocalStorage(data: LocalData): void {
    localStorage.setItem('user', JSON.stringify(data));
    removeFormElement();
}

function deleteUserDataFromLocalStorage(): void {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
        try {
            const userData: LocalData = JSON.parse(userDataString);
            if (userData.firstName && userData.surname) {
                localStorage.removeItem('user');
            }
        } catch (error) {
            console.error('Error parsing user data from local storage:', error);
        }
    }
    window.location.reload();
}

function handleLogout() {
    deleteUserDataFromLocalStorage();
}

function handleSubmit(event: Event) {
    event.preventDefault();
    const data: LocalData = {
        firstName: inputName instanceof HTMLInputElement ? inputName.value : '',
        surname: inputLastName instanceof HTMLInputElement ? inputLastName.value : '',
    };
    saveUserDataToLocalStorage(data);
}

export { LocalData, handleSubmit, handleLogout, saveUserDataToLocalStorage, removeUserPage, getUserData };
