var app = angular.module('Appelu');

app.controller('ShiftCtrl', ['$scope','$timeout','$mdSidenav', function ($scope, $timeout, $mdSidenav) {
	$scope.services = ["Peluquería", "Barbería"];

    $scope.availableShifts = [
    {
    	id: 1665,
      user_id: null,
      service_id: 61,
      comment: "reservita",
      created_at: "2017-02-26T21:35:23.985Z",
      updated_at: "2017-02-26T21:35:23.985Z",
      start_time: "2017-03-01T12:00:00.000Z",
      end_time: "2017-03-01T12:30:00.000Z",
      status: "active"
    },{
			id: 16615,
      user_id: null,
      service_id: 61,
      comment: "reservita",
      created_at: "2017-02-26T21:35:23.985Z",
      updated_at: "2017-02-26T21:35:23.985Z",
      start_time: "2017-03-01T12:00:00.000Z",
      end_time: "2017-03-01T12:30:00.000Z",
      status: "disabled"
    }];
}])