var app = angular.module('Appelu');

app.controller('UserCtrl', ['$scope','$timeout','$mdSidenav','userFactory', function ($scope, $timeout, $mdSidenav, userFactory) {

  $scope.selected = [];

  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  };

 /* function success(users){
    $scope.users = users;
  }*/

 /* $scope.getUsers = function(){
    $scope.promise = userFactory.getUsers
  }*/
  $scope.getUsers = function() {
    userFactory.getUsers().then(function(response){
      $scope.users = response.data;
      console.log(response);
    }, function(error){
      console.log(error);
    });
  };

  $scope.getUsers();

  $scope.selectRow = function(index){
    $scope.activeRow = index;
  }

  $scope.options ={
    rowSelection: true,
  };
}])