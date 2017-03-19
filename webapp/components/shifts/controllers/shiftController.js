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

  $scope.deleteShift = function(id, index){
    console.log("Hello "+id+" "+index);
    shiftFactory.deleteShift(id).then(function(response){
      $scope.shifts[index].attributes.status = "disabled";      
      console.log($scope.shifts);
    }, function(error){
      console.log(error);
    });
  }

  $scope.enableShift = function(shift){
    var updatedShift = shift;
    updatedShift.attributes.status = "active";
    shiftFactory.updateShift(updatedShift).then(function(response){
      shift.attributes.status = "active";
      console.log($scope.shifts);
    }, function(error){
      console.log(error);
    })
  }

  
}])