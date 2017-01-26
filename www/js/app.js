var angularApp = angular.module('angularApp', [
  'ui.bootstrap',
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'angularApp.controllers',
  'angularApp.services'
]);

angularApp.config(['$routeProvider',
function($routeProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    })
    .otherwise({
        redirectTo: '/home'
    });
}]);