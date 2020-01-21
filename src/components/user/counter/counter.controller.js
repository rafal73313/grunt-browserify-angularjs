var jquery = require('jquery');
var moment = require('moment');

require('./index')
    .controller('waCounterCtrl', ['$scope', function($scope) {
        console.log('hello everybody from waCounterCtrl!!!');
        $scope.count = 0;
        $scope.bgColorIsSet = false;

        $scope.date = moment().format("DD-MM-YYYY | HH:mm");

        $scope.increment = function () {
            $scope.count = $scope.count + 1;
        }

        $scope.decrement = function () {
            if (!$scope.bgColorIsSet) {
                jquery('body').css('background-color', 'red');
                $scope.bgColorIsSet = true
            }
            $scope.count = $scope.count - 1;
        }

    }]);