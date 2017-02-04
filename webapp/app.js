/**
*  Module: Appelu
*
* Description
*/
var app = angular.module('Appelu', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when("/shifts", {
		templateUrl: "webapp/shifts/views/list.html",
		controller: "ShiftCtrl"
	})
}])