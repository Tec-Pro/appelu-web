var app = angular.module('Appelu');

app.controller('UserCtrl', ['$scope', '$location','$timeout','$mdSidenav','userFactory', 'AuthFactory', function ($scope, $location, $timeout, $mdSidenav, userFactory, AuthFactory) {

  $scope.selected = [];

  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  };

  if (!AuthFactory.user){
    $location.path("/login");
  }

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

  $scope.register = function(){
    createUser($scope.user);
  };

  function createUser(user){
    userFactory.createUser(user).then(function(response){
      console.log(response.data);
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