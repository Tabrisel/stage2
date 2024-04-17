import UserPageView from '../../views/userPageView';

class UserPageViewInstance {
    static instance: UserPageView | null = null;

    static getInstance() {
        if (!UserPageViewInstance.instance) {
            UserPageViewInstance.instance = new UserPageView();
        }
        return UserPageViewInstance.instance;
    }
}

export default UserPageViewInstance;
