var app = angular.module('Appelu');

app.controller('ReserveCtrl', ['$scope','$timeout', '$location', '$routeParams','$mdSidenav','shiftFactory','AuthFactory', function ($scope, $timeout, $location, $routeParams, $mdSidenav, shiftFactory, AuthFactory) {
  $scope.selected = [];

  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  };

  $scope.reserveMenu = function($mdMenu, ev){
    $mdMenu.open(ev);
  }

  $scope.optionsMenu = function($mdMenu, ev){
    $mdMenu.open(ev);
  }

  if (!AuthFactory.user){
    $location.path("/login");
  }

  $scope.getReserves = function(){
    if (AuthFactory.user){
      if (AuthFactory.user.role.toLowerCase() == "admin"){
        shiftFactory.getServiceShifts(1).then(function(response){
        $scope.reserves = response.data;
          console.log(response)
        }, function(error){
          console.log(error);
        }); 
      } else if (AuthFactory.user.role.toLowerCase() == "client") {
        shiftFactory.getUserShifts(AuthFactory.user.id).then(function(response){
          $scope.reserves = response.data;
          console.log(response)
        }, function(error){
          console.log(error);
        });
      } else {
        $location.path("/shifts");
      }
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

  $scope.getReserves();

  $scope.deleteReserve = function(item){
    console.log(item);
    shiftFactory.deleteShift(item.attributes.id).then(function(response){
      item.attributes.status = "disabled";
      $scope.selected = [];
      console.log($scope.reserves);      
    }, function(error){
      console.log(error);
    });
  }

  $scope.cancelReserve = function(item){
    var updatedShift = item;
    updatedShift.attributes.status = "active";
    updatedShift.attributes.user_id = null;
    updatedShift.attributes.comment = "";
    shiftFactory.updateShift(item.attributes.id, item).then(function(response){
      console.log(response);
      item.attributes.status = "active";
      $scope.selected = [];
    }, function(error){
      console.log(error);
    })
  }

  /*$scope.deleteShift = function(id, index){
    shiftFactory.deleteShift(id).then(function(response){
      $scope.shifts[index].attributes.status = "disabled";      
      console.log($scope.shifts);
    }, function(error){
      console.log(error);
    });
  }*/

  /*$scope.enableShift = function(shift){
    var updatedShift = shift;
    updatedShift.attributes.status = "active";
    shiftFactory.updateShift(updatedShift).then(function(response){
      shift.attributes.status = "active";
      console.log($scope.shifts);
    }, function(error){
      console.log(error);
    })
  }*/

  $scope.selectRow = function(index){
    $scope.activeRow = index;
  }

  $scope.options ={
    rowSelection: true,
    multiSelect: false
  };
}])