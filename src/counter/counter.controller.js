var angular = require('angular');
var jquery = require('jquery');

module.exports = angular.module('wa.counter.controllers', [])
    .controller('waCounterCtrl', ['$scope', 'waLoginService', function ($scope, waLoginService) {
        $scope.count = 0;

        $scope.increment = function () {
            $scope.count = $scope.count + 1;
            console.log(jquery('.wa-counter').eq(0));
            jquery('.wa-counter').eq(0).css('background-color', 'cyan');
        }

        $scope.decrement = function () {
            $scope.count = $scope.count - 1;
        }

        $scope.btnClickLogin = function () {
            console.log('clicked login btn from counter controller!');
            waLoginService.performLogin();
        }
    }])