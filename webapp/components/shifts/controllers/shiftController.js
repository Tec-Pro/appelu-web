var app = angular.module('Appelu');

app.controller('ShiftCtrl', ['$scope','$timeout', '$location', '$routeParams','$mdSidenav','shiftFactory', function ($scope, $timeout, $location, $routeParams, $mdSidenav, shiftFactory) {
	$scope.services = ["Peluquería", "Barbería"];

  $scope.selected = [];

  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  };

  $scope.serviceMenu = function($mdMenu, ev){
    $mdMenu.open(ev);
  }

  $scope.getShifts = function(service_id){
    $location.search('service_id', service_id);
    shiftFactory.getServiceShifts(service_id).then(function(response){
      $scope.shifts = response.data;
      console.log(response)
    }, function(error){
      console.log(error);
    })
  }

  $scope.getShifts($routeParams.service_id);

  $scope.deleteShift = function(item){
    console.log(item);
    shiftFactory.deleteShift(item.attributes.id).then(function(response){
      item.attributes.status = "disabled";
      $scope.selected = [];      
      console.log($scope.shifts);
    }, function(error){
      console.log(error);
    });
  }

  /*$scope.deleteShift = function(id, index){
    shiftFactory.deleteShift(id).then(function(response){
      $scope.shifts[index].attributes.status = "disabled";      
      console.log($scope.shifts);
    }, function(error){
      console.log(error);
    });
  }*/

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

  $scope.selectRow = function(index){
    $scope.activeRow = index;
  }

  $scope.options ={
    rowSelection: true,
    multiSelect: false
  };
}])