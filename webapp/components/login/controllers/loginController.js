var app = angular.module('Appelu');

app.controller('LoginCtrl', ['$scope', '$location', '$http', 'AuthFactory','localStorageService', function($scope,$location,$http,AuthFactory,localStorageService) {

	if (AuthFactory.user){
		console.log(AuthFactory.user);
		$location.path("/shifts");
	}

  $scope.login = function(){
  	AuthFactory.login($scope.user).then(function(response){
  		AuthFactory.setUser(response.data);
  		console.log(response.data);
  		$location.path("/shifts");
  	}, function(error){
  		console.log(error);
  	})
  }

}]);