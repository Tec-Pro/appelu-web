var app = angular.module('Appelu');

app.controller('ShiftCtrl', ['$scope','$timeout','$mdSidenav', function ($scope, $timeout, $mdSidenav) {
	$scope.services = ["Peluquería", "Barbería"];

    $scope.availableShifts = [
    {
    	service: "Peluquería",
    	hour: "18:00"
    },{
		service: "Barbería",
    	hour: "19:00"
    }];
}])