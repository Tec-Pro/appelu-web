var app = angular.module('Appelu');

app.controller('SidebarCtrl', ['$scope','$timeout','$mdSidenav','$location', '$route', function ($scope, $timeout, $mdSidenav, $location, $route) {
	$scope.menuItems = [
		{
			name: "Turnos",
			url: "/shifts",
			icon: "book"
		},
		{
			name: "Perfil",
			url: "/profile",
			icon: "account_circle"
		},
		{
			name: "Usuarios",
			url: "/users",
			icon: "list"
		}
	]



	$scope.activeMenu;

	$scope.setActive = function(menuItem){
		$scope.activeMenu = menuItem;
	}


	$scope.$on('$routeChangeStart', function (scope, next, current) {
		initMenu();
       	setVisible();
    });

	function initMenu(){
		var actualLocation = $location.path();
		for (var i = $scope.menuItems.length - 1; i >= 0; i--) {
			if (actualLocation == $scope.menuItems[i].url){
				$scope.setActive($scope.menuItems[i]);	
				break;
			}
		}
	};

	initMenu();

	function setVisible(){
		$scope.visible = $location.path() != '/login';
	};

    setVisible();
	
}])