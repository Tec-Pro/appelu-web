/**
*  Module: Appelu
*
* Description
*/
var app = angular.module('Appelu', ['ngRoute', 'ngMaterial', 'md.data.table', 'LocalStorageModule']);

app.config(['$routeProvider', 'localStorageServiceProvider', '$httpProvider', function($routeProvider, localStorageServiceProvider, $httpProvider) {
	$routeProvider
	.when("/reserves",{
		templateUrl: "webapp/components/reserves/views/list.html",
		controller: "ReserveCtrl"
	})
	.when("/shifts", {
		templateUrl: "webapp/components/shifts/views/list.html",
		controller: "ShiftCtrl"
	})
	.when("/login", {
		templateUrl: "webapp/components/login/views/login.html",
		controller: "LoginCtrl"
	})
	.when("/users", {
		templateUrl: "webapp/components/users/views/list.html",
		controller: "UserCtrl"
	})
	.when("/register", {
		templateUrl: "webapp/components/register/views/register.html",
		controller: "UserCtrl"
	})
	.otherwise({
		redirectTo: "/login"
	});

	localStorageServiceProvider.setPrefix('appelu');

	$httpProvider.defaults.useXDomain = true;
}])