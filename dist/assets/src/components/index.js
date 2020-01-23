var angular = require('angular');
module.exports = angular.module('wa.components', [
    require('./admin').name,
    require('./user').name
]);
