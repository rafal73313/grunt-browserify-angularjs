module.exports = angular.module('wa.components.user.app.header.paragraph.directives', [])
    .directive('waParagraph', ['waParagraphService', function(waParagraphService) {
        return {
            template: '<div><h1>Hello World from: {{ title }}!</h1><button ng-click="handleGetNameClick()">get name</button></div>',
            link: function (scope, el, attrs) {
                scope.title = 'waParagraph';

                el.find('div').css('background-color', 'salmon');

                console.log(el);

                scope.handleGetNameClick = function () {
                    console.log('from waParagraph directive, handleGetNameClick(): ')
                    console.log(waParagraphService.getName());
                }

            }
        }
    }])