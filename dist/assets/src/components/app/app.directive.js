(function () {

    angular.module('wa')
        .directive('waApp', function() {
            return {
                templateUrl: 'src/components/app/app.template.html',
                link: function (scope, el, attr) {
                    console.log('hello everybody!');
                    scope.title = 'AngularJS & Grunt & Browserify'
                }
            }
        })

})();