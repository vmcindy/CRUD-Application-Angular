
	var app = angular.module('myApp', ['ngRoute']);

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
