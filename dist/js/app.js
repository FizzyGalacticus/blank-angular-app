(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _TestService = require('./services/TestService.js');

var _TestService2 = _interopRequireDefault(_TestService);

var _MainController = require('./controllers/MainController.js');

var _MainController2 = _interopRequireDefault(_MainController);

var _HomeController = require('./controllers/HomeController.js');

var _HomeController2 = _interopRequireDefault(_HomeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var angularApp = angular.module('angularApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ngTouch']).service('TestService', _TestService2.default).controller('MainCtrl', _MainController2.default).controller('HomeCtrl', _HomeController2.default);

angularApp.config(['$routeProvider', function ($routeProvider) {
    'ngInject';

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'ctrl'
    }).otherwise({
        redirectTo: '/home'
    });
}]);

},{"./controllers/HomeController.js":2,"./controllers/MainController.js":3,"./services/TestService.js":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeController = function HomeController(TestService) {
	'ngInject';

	var _this = this;

	_classCallCheck(this, HomeController);

	this.name = 'HomeCtrl';
	this.result = '';

	TestService.someServiceFunction(function (response) {
		_this.result = response;
	});
};

HomeController.$inject = ['TestService'];
exports.default = HomeController;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainController = function () {
	MainController.$inject = ['$location'];

	function MainController($location) {
		'ngInject';

		_classCallCheck(this, MainController);

		this.name = 'MainCtrl';
		this.location = $location;
		this.navCollapsed = true;
	}

	_createClass(MainController, [{
		key: 'changeView',
		value: function changeView(view) {
			this.location.path(view);
		}
	}]);

	return MainController;
}();

exports.default = MainController;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestService = function () {
	function TestService() {
		_classCallCheck(this, TestService);

		this.response = 'Hello from TestService!';
	}

	_createClass(TestService, [{
		key: 'someServiceFunction',
		value: function someServiceFunction(callback) {
			if (callback) callback(this.response);
		}
	}]);

	return TestService;
}();

exports.default = TestService;

},{}]},{},[1]);
