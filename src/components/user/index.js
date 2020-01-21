var angular = require('angular');
module.exports = angular.module('wa.components.user', [
    require('./app').name,
    require('./counter').name
]);
