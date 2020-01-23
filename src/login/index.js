var angular = require('angular');

require('./login.directive');
require('./login.service');

module.exports = angular.module('wa.login', [
    'wa.login.services',
    'wa.login.directives',
]);