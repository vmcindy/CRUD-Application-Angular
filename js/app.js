
	var app = angular.module('myApp', ['ngRoute']);

	/*app.controller('FormController',  function() {
	this.a=10;
});*/

	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: "FormController",
				templateUrl: "views/home.html"
			})
			.otherwise({
				redirectTo: '/'
			})
	});
