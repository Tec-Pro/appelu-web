var app = angular.module('Appelu');
	
app.factory('AuthService', ['$http', function($http){

	var urlBase = "https://private-9195cfb-reservationsapp.apiary-mock.com/login"

	loginFactory = {};
	
	loginFactory.user = {};


	loginFactory.login = function (user){
		$http.post(urlBase, user);
	};


	loginFactory.logout = function(){
		loginFactory.user = "";
	}

	return loginFactory;
}]);
