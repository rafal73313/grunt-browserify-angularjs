import angular from 'angular';

import waCounterController from './counter.controller';
import waCounter from './counter.directive';



const waCounterModule = angular.module('wa.counter', [])
    .controller('waCounterController', waCounterController)
    .directive('waCounter', waCounter)

export default waCounterModule;