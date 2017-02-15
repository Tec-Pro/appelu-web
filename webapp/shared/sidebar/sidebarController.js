var app = angular.module('Appelu');

app.controller('SidebarCtrl', ['$scope','$timeout','$mdSidenav', function ($scope, $timeout, $mdSidenav) {
	$scope.menuItems = [
		{
			name: "Perfil",
			url: "/profile",
			icon: "account_circle"
		},
		{
			name: "Reservas",
			url: "/reserves",
			icon: "assignment"
		},
		{
			name: "Turnos",
			url: "/shifts",
			icon: "book"
		}
	]
}])