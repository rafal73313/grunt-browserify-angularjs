const waLoginService = function ($scope, $window) {
    'ngInject'

    var loginStatus = 'not logged in';

    this.performLogin = function () {
        console.log('loginService() - performed login!');
        loginStatus = 'logged in';
    }

    this.getLoginStatus = function () {
        return loginStatus;
    }

}

export default waLoginService;