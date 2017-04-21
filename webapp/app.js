/**
*  Module: Appelu
*
* Description
*/
var app = angular.module('Appelu', ['ngRoute', 'ngMaterial', 'md.data.table']);

app.config(['$routeProvider',function($routeProvider) {
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
	.otherwise({
		redirectTo: "/login"
	});
}])