var app = angular.module('Appelu');

app.controller('ToolbarCtrl', ['$scope', 'AuthFactory', '$location', '$route', function ($scope, AuthFactory, $location, $route) {
	
	$scope.appName = app.name;

	$scope.logout = function(){
		AuthFactory.logout();
		$location.path("/login");
	}

	showLogout();

	function showLogout(){
		if (AuthFactory.user){
			$scope.showLogout = true;
		} else{
			$scope.showLogout = false;
		}
	}

	$scope.$on('$routeChangeStart', function (scope, next, current) {
		showLogout();
  });

}])