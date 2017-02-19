var app = angular.module("Appelu");


app.directive("sidebarDirective", function(){
	return {
		restrict: "E",
		templateUrl: "./webapp/shared/sidebar/sidebar.tpl.html",
		controller: "SidebarCtrl"
	}
});