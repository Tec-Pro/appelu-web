var app = angular.module('Appelu');

app.controller('LoginCtrl', ['$scope', '$location', function($scope,$location) {

    $scope.ingresar = function() {
        
        $location.path('/shifts');

    };
}]);