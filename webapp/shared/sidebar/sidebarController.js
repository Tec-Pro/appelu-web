var app = angular.module('Appelu');

app.controller('SidebarCtrl', ['$scope','$timeout','$mdSidenav', function ($scope, $timeout, $mdSidenav) {
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
}])