var app = angular.module('Appelu');

app.controller('LoginCtrl', ['$scope', '$location', '$http',function($scope,$location,$http) {

    $scope.ingresar = function() {

    	//alert($scope.username)
    	//alert($scope.password)

    	
		
        
        $location.path('/shifts');

    };
}]);