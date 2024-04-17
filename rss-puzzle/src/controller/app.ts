import checkIsUserLogin from '../utils/userState';
import LoginPageViewInstance from '../service/loginPage/loginPageInstance';
import UserPageViewInstance from '../service/userPage/userPageInstance';

const loginPageView = LoginPageViewInstance.getInstance();
const userPageView = UserPageViewInstance.getInstance();

if (!checkIsUserLogin()) {
    if (loginPageView) {
        loginPageView.render();
    }
} else {
    userPageView.render();
}

export { userPageView, loginPageView };
