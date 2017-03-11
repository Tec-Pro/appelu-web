var app = angular.module('Appelu');

app.controller('ToolbarCtrl', ['$scope', function ($scope) {
	
	$scope.appName = app.name;
}])