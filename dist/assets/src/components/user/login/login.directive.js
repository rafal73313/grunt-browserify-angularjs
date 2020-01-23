require('./index')
    .directive('waUserLogin', ['waUserLoginService', 'waParagraphService', function (waUserLoginService, waParagraphService) {
        return {
            templateUrl: 'src/components/user/login/login.template.html',
            link: function(scope, el, attrs) {
                scope.username = '';

                scope.setUsername = function (newName) {
                    scope.username = newName;
                }

                scope.onUserLogin = function() {
                    console.log('clicked onUserLogin()');
                    console.log('from waParagraphService.getName(): ', waParagraphService.getName());

                    waUserLoginService.login(scope.setUsername);

                    console.log(waUserLoginService.getUsername());
                }
            }
        }
    }])