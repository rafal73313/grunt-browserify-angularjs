import angular from 'angular';

import waLogin from './login.directive';
import waLoginService from './login.service';

const waLoginModule = angular.module('wa.login', [])
    .directive('waLogin', waLogin)
    .service('waLoginService', waLoginService)

export default waLoginModule;