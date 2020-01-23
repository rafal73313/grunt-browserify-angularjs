var angular = require('angular');
module.exports = angular.module('wa.components.user.app.header.paragraph', [
    require('./paragraph.directive').name,
    require('./paragraph.service').name
]);