var app = angular.module('Appelu');
	
app.factory('AuthFactory', ['$http', 'localStorageService', function($http, localStorageService){

	var urlBase = "https://private-9195cfb-reservationsapp.apiary-mock.com/login"

	authFactory = {};
	if (localStorageService.get("user")){
		authFactory.user = localStorageService.get("user");
	} 

	authFactory.login = function (user){
		return $http.post(urlBase, user);
	};


	authFactory.logout = function(){
		localStorageService.remove("user");
		authFactory.user = undefined;
	}

	authFactory.setUser = function (user){
		authFactory.user = user;
		localStorageService.set("user",user);
	}
	return authFactory;
}]);
