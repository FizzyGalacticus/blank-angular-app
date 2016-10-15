angular.module('angularApp.services', [])

.factory('$someService', ['$http', function($http) {
    var someServiceFunction = function(callback) {
        if(callback)
            callback();
    };

    return {'someServiceFunction':someServiceFunction};
}]);