angular.module('angularApp.controllers', [])

.controller('MainCtrl', function ($scope, $location) {
    $scope.name = 'MainCtrl';
    $scope.navCollapsed = true;

    $scope.changeView = function(view) {
        $location.path(view);
    };
})

.controller('HomeCtrl', function ($scope, $someService) {
    $scope.name   = 'HomeCtrl';
    $scope.result = '';

    $someService.someServiceFunction(function() {
        $scope.result = 'This value was set using a service.';
    });
});
