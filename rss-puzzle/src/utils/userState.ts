import { LocalData } from '../service/userPage/localStorage';

function checkIsUserLogin(): boolean {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
        try {
            const userData: LocalData = JSON.parse(userDataString);
            return !!userData.firstName && !!userData.surname;
        } catch (error) {
            console.error('Error parsing user data from local storage:', error);
        }
    }
    return false;
}

export default checkIsUserLogin;
