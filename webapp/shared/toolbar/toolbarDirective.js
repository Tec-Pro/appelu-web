var app = angular.module("Appelu");


app.directive("toolbarDirective", function(){
	return {
		restrict: "E",
		templateUrl: "./webapp/shared/toolbar/toolbar.tpl.html",
		controller: "ToolbarCtrl"
	}
});