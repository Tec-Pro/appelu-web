var app = angular.module('Appelu');

app.controller('ShiftCtrl', ['$scope','$timeout', '$location', '$routeParams','$mdSidenav','shiftFactory','AuthFactory', function ($scope, $timeout, $location, $routeParams, $mdSidenav, shiftFactory, AuthFactory) {
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

  $scope.optionsMenu = function($mdMenu, ev){
    $mdMenu.open(ev);
  }

  $scope.getShifts = function(service_id){
    $location.search('service_id', service_id);
    shiftFactory.getServiceShifts(1).then(function(response){
      $scope.shifts = response.data;
      console.log(response)
    }, function(error){
      console.log(error);
    })
  }

  if (!AuthFactory.user){
    $location.path("/login");
  }

  $scope.loggedUser = AuthFactory.user;

  $scope.checkPermission = function(){
    return $scope.loggedUser.role == "owner" || $scope.loggedUser.role == "admin";
  }

  $scope.checkClient = function(){
    return $scope.loggedUser.role == "client";
  }

  $scope.checkStatus = function(item){
    if ($scope.loggedUser.role == "client"){
      return item.attributes.status == "active";
    } else {
      return true;
    }
  }

  $scope.showStatus = function(status){
    switch(status){
      case "active":
        return "Disponible";
        break;
      case "disabled":
        return "Deshabilitado";
        break;
      case "reserved":
        return "Reservado";
        break;
      default:
        return "";
        break;
    }
  }

  $scope.getShifts($routeParams.service_id);

  $scope.deleteShift = function(item){
    var updatedShift = item;
    updatedShift.attributes.status = "disabled";
    updatedShift.attributes.user_id = null
    shiftFactory.updateShift(updatedShift).then(function(response){
      item.attributes.status = "disabled";
      item.attributes.user_id = null;
      console.log(response);
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
  $scope.showReserveDialog = function(){
    
  }

  var createReserve = function(shift){
    var updatedShift = shift;
    updatedShift.attributes.status = "reserved";
    updatedShift.attributes.user_id = $scope.loggedUser.user_id;
    updatedShift.attributes.comment = $scope.reserve_comment;
    shiftFactory.updateShift(updatedShift).then(function(response){
      shift.attributes.status = "reserved";
      $scope.selected = [];
    }, function(error){
      console.log(error);
    })
  };

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