(function () {
	'use strict';
	
	angular.module('myRetail', ['ui.router', 'ngSanitize'])
	.config(['$urlRouterProvider', function ($urlRouterProvider) {
	    $urlRouterProvider.otherwise('/product');
	}]);

})();
