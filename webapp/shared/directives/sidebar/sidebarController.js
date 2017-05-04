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

	$scope.$on('$routeChangeStart', function (scope, next, current) {
		setVisible();
		initMenu();
  });

  function setVisible(){
		$scope.visible = !($location.path() == '/login' || $location.path() == '/register');
	};

  setVisible();


	function initMenu(){
		var actualLocation = $location.path();
		for (var i = $scope.menuItems.length - 1; i >= 0; i--) {
			$scope.menuItems[i].visible = showItem($scope.menuItems[i]);
			if (actualLocation == $scope.menuItems[i].url){
				$scope.setActive($scope.menuItems[i]);	
			}
		}
	};

	initMenu();

  function showItem(item){
  	if (AuthFactory.user != undefined){
  		if (AuthFactory.user.role.toLowerCase() == "admin"){
  			return (item.url == "/shifts" || item.url == "/users");
  		} else if (AuthFactory.user.role.toLowerCase() == "owner") {
  			return (item.url == "/shifts");
  		} else if (AuthFactory.user.role.toLowerCase() == "client"){
  			return (item.url == "/shifts" || item.url == "/reserves")
  		}
  		return false;
			//return ((item.adminOnly && AuthFactory.user.role == 'admin') || !(item.adminOnly && item.url == "/shifts" && AuthFactory.user.role != "admin"))
		} else {
			return false;
		}
  }
	
}])