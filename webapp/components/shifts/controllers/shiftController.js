var app = angular.module('Appelu');

app.controller('ShiftCtrl', ['$scope','$timeout','$mdSidenav','shiftFactory', function ($scope, $timeout, $mdSidenav, shiftFactory) {
	$scope.services = ["Peluquería", "Barbería"];

  function getShifts(){
    shiftFactory.getServiceShifts(62).then(function(response){
      $scope.shifts = response.data;
      console.log(response)
    }, function(error){
      console.log(error);
    })
  }

  getShifts();

}])