import TestService from './services/TestService.js';
import MainController from './controllers/MainController.js';
import HomeController from './controllers/HomeController.js';

let angularApp = angular.module('angularApp', [
	'ui.bootstrap',
	'ngRoute',
	'ngAnimate',
	'ngTouch',
])
.service('TestService', TestService)
.controller('MainCtrl', MainController)
.controller('HomeCtrl', HomeController);

angularApp.config(($routeProvider) => {
	'ngInject';
	$routeProvider
	.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'ctrl',
	})
	.otherwise({
		redirectTo: '/home',
	});
});
