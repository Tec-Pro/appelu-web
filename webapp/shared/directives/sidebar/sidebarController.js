var app = angular.module('Appelu');

app.controller('SidebarCtrl', ['$scope','$timeout','$mdSidenav','$location', '$route', function ($scope, $timeout, $mdSidenav, $location, $route) {
	$scope.menuItems = [
		{
			name: "Turnos",
			url: "/shifts",
			icon: "book"
		},
		{
			name: "Reservas",
			url: "/reserves",
			icon: "assignment"
		},{
			name: "Perfil",
			url: "/profile",
			icon: "account_circle"
		}
		
	]

	$scope.activeMenu = $scope.menuItems[0];

	$scope.setActive = function(menuItem){
		$scope.activeMenu = menuItem;
	}

	function setVisible(){
		$scope.visible = $location.path() != '/login';
	}

	$scope.$on('$routeChangeStart', function (scope, next, current) {
       	setVisible();
    });

    setVisible();
	
}])