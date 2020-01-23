var angular = require('angular');

require('../login/login.service');
require('./counter.controller');
require('./counter.directive');

module.exports = angular.module('wa.counter', [
    'wa.login.services',
    'wa.counter.controllers',
    'wa.counter.directives'
]);