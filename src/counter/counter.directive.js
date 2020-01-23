var angular = require('angular');
module.exports = angular.module('wa.counter.directives', [])
    .directive('waCounter', [function () {
        return {
            templateUrl: 'src/counter/counter.template.html',
            controller: 'waCounterCtrl'
        }
    }]);