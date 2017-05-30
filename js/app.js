
	var app = angular.module('myApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl:"views/home.html"
			})
			.when('/display', {
				templateUrl:"views/display.html"
			})
			.when('/create', {
				controller: "FormController",
				templateUrl: "views/createForm.html"
			})
			.otherwise({
				redirectTo: '/'
			})
	});
