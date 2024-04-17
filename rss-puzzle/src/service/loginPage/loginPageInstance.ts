import LoginPageView from '../../views/loginPageView';

class LoginPageViewInstance {
    private static instance: LoginPageView | null = null;

    static getInstance() {
        if (!LoginPageViewInstance.instance) {
            LoginPageViewInstance.instance = new LoginPageView();
        }
        return LoginPageViewInstance.instance;
    }
}

export default LoginPageViewInstance;
