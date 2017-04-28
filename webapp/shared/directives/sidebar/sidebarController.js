var app = angular.module('Appelu');

app.controller('SidebarCtrl', ['$scope','$timeout','$mdSidenav','$location', '$route', 'AuthFactory', function ($scope, $timeout, $mdSidenav, $location, $route, AuthFactory) {
	$scope.menuItems = [
		{
			name: "Turnos",
			url: "/shifts",
			icon: "book",
			adminOnly: false,
			visible: false
		},
		{
			name: "Reservas",
			url: "/reserves",
			icon: "label",
			adminOnly: false,
			visible: false
		},
		{
			name: "Usuarios",
			url: "/users",
			icon: "list",
			adminOnly: true,
			visible: false
		}
	]

	$scope.activeMenu;

	$scope.setActive = function(menuItem){
		$scope.activeMenu = menuItem;
	}

	$scope.loggedUser = AuthFactory.user;

	$scope.$on('$routeChangeStart', function (scope, next, current) {
		initMenu();
   	setVisible();
  });

	function initMenu(){
		var actualLocation = $location.path();
		for (var i = $scope.menuItems.length - 1; i >= 0; i--) {
			if (actualLocation == $scope.menuItems[i].url){
				$scope.setActive($scope.menuItems[i]);	
			}
			$scope.menuItems[i].visible = showItem($scope.menuItems[i]);
		}
	};

	initMenu();

	function setVisible(){
		$scope.visible = !($location.path() == '/login' || $location.path() == '/register');
	};

  setVisible();

  function showItem(item){
  	console.log(item);
  	if ($scope.loggedUser != undefined){
  		if ($scope.loggedUser.role.toLowerCase() == "admin"){
  			return true;
  		} else if ($scope.loggedUser.role.toLowerCase() == "owner") {
  			return (item.url == "/shifts");
  		} else if ($scope.loggedUser.role.toLowerCase() == "client"){
  			console.log("Here");
  			return (item.url == "/shifts" || item.url == "/reserves")
  		}
  		return false;
			//return ((item.adminOnly && $scope.loggedUser.role == 'admin') || !(item.adminOnly && item.url == "/shifts" && $scope.loggedUser.role != "admin"))
		} else {
			return false;
		}
  }
	
}])