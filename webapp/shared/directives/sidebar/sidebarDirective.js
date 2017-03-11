var app = angular.module("Appelu");


app.directive("sidebarDirective", function(){
	return {
		restrict: "E",
		templateUrl: "./webapp/shared/directives/sidebar/sidebar.tpl.html",
		controller: "SidebarCtrl"
	}
});