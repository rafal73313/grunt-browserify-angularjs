var angular = require('angular');
module.exports = angular.module('wa.login.directives', [])
    .directive('waLogin', ['waLoginService', function (waLoginService) {
        return {
            templateUrl: 'src/login/login.template.html',
            link: function(scope, el, attrs) {
                console.log('hello from waLogin directive');

                scope.greeting = 'Hello';
                scope.waLoginService = waLoginService;

                scope.loginBtnClick = function () {
                    waLoginService.performLogin();
                }
            }
        }
    }]);