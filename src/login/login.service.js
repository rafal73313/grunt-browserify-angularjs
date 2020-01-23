var angular = require('angular');
module.exports = angular.module('wa.login.services', [])
    .service('waLoginService', [function () {

        var loginStatus = 'not logged in';

        this.performLogin = function () {
            loginStatus = 'logged in';
        }

        this.getLoginStatus = function () {
            return loginStatus;
        }
    }])