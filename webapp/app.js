/**
*  Module: Appelu
*
* Description
*/
var app = angular.module('Appelu', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider

	.when("/shifts", {
		templateUrl: "webapp/components/shifts/views/list.html",
		controller: "ShiftCtrl"
	})
	.when("/login", {
		templateUrl: "webapp/components/login/views/login.html",
		controller: "LoginCtrl"
	})
}])