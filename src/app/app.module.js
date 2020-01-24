import angular from 'angular';
import waApp from './app.directive';

import waCounterModule from '../counter/counter.module';
import waLoginModule from '../login/login.module';

const appModule = angular.module('wa.app', [
    waCounterModule.name,
    waLoginModule.name
])
    .directive('waApp', waApp);

export default appModule;