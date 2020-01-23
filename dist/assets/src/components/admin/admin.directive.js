require('../user/app/header/paragraph');
require('./index')
    .directive('waAdmin', ['waParagraphService', function (waParagraphService) {
        return {
            template: '<div><h1>Admin: {{ adminName }}</h1><button ng-click="handleGetNameClick()">get name</button></div>',
            link: function (scope, el, attrs) {
                scope.adminName = 'Frank';
                el.find('div').css('background-color', 'cyan');

                scope.handleGetNameClick = function () {
                    console.log('handleGetNameClick() triggered - from waAdmin.');
                    console.log('waAdmin - waParagraphService.getName(): ', waParagraphService.getName());
                }
            }
        }
    }])