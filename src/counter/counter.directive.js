import angular from 'angular';

const waCounter = function () {
    'ngInject'
    return {
        templateUrl: 'src/counter/counter.template.html',
        controller: 'waCounterController'
    }
}

export default waCounter;