require('./index')
    .directive('waCounter', function () {
        return {
            controller: 'waCounterCtrl',
            templateUrl: 'src/components/user/counter/counter.template.html',
        }
    })