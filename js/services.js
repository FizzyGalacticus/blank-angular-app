angular.module('angularApp.services', [])

//Get IP Address
.factory('$someService', ['$http', function($http) {
    var someServiceFunction = function(callback) {
        if(callback)
            callback();
    };

    return {'someServiceFunction':someServiceFunction};
}]);

