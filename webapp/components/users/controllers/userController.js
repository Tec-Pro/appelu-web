var app = angular.module('Appelu');

app.controller('UserCtrl', ['$scope','$timeout','$mdSidenav','userFactory', function ($scope, $timeout, $mdSidenav, userFactory) {

  function getUsers(){
    userFactory.getUsers().then(function(response){
      $scope.users = response.data;
      console.log(response);
    }, function(error){
      console.log(error);
    });
  };

  getUsers();

  $scope.selectRow = function(index){
    $scope.activeRow = index;
  }
}])