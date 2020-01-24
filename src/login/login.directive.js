import waLoginService from "./login.service";

const waLogin = function () {
    'ngInject'
    return {
        templateUrl: 'src/login/login.template.html',
        link: function(scope, el, attrs) {
            console.log('hello from waLogin directive');

            scope.greeting = 'Hello';
            // scope.waLoginService = waLoginService;

            scope.loginBtnClick = function () {
                // waLoginService.performLogin();
            }
        }
    }
}

export default waLogin;