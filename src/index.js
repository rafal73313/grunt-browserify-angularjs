(function () {

    var angular = require('angular');

    require('./counter');
    require('./login');

    var app = angular.module('wa', [
        'wa.counter',
        'wa.login'
    ]);

    // angular.bootstrap(document.body, ['wa']);

})();
