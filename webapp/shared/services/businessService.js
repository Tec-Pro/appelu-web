var app = angular.module('Appelu');

app.factory('businessFactory', ['$http', function($http){

	var urlBase = 'https://private-9195cfb-reservationsapp.apiary-mock.com/business'
	var businessFactory = {};

	businessFactory.listBusinesses = function(){
		return $http.get(urlBase);
	}

	businessFactory.getBusiness = function(id){
		return $http.get(urlBase+'/'+id);
	}

	businessFactory.createBusiness = function(business){
		return $http.post(urlBase);
	}

	businessFactory.deleteBusiness = function(id){
		return $http.delete(urlBase+'/'+id);
	}	

	businessFactory.updateBusiness = function(business){
		return $http.put(urlBase+'/'+business.id, business);
	}

	return businessFactory;
}])