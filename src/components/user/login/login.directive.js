require('./index');
require('./index')
    .directive('waUserLogin', ['waUserLoginService', function (waUserLoginService) {
        return {
            templateUrl: 'src/components/user/login/login.template.html',
            link: function(scope, el, attrs) {
                scope.username = '';

                scope.setUsername = function (newName) {
                    scope.username = newName;
                }

                scope.onUserLogin = function() {
                    console.log('clicked onUserLogin()');

                    waUserLoginService.login(scope.setUsername);

                    console.log(waUserLoginService.getUsername());
                }
            }
        }
    }])