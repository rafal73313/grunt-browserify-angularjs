require('./index')
    .directive('waApp', ['waUserLoginService', function(waUserLoginService) {
        return {
            templateUrl: 'src/components/user/app/app.template.html',
            link: function (scope, el, attr) {
                console.log('hello everybody!');
                scope.title = 'AngularJS & Grunt & Browserify'
            }
        }
    }])
