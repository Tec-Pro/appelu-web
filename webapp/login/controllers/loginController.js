var app = angular.module('Appelu');

app.controller('LoginCtrl', ['$scope', '$location', function($scope,$location) {

    $scope.ingresar = function() {

    	alert($scope.username)
    	alert($scope.password)
        
        $location.path('/shifts');

    };
}]);