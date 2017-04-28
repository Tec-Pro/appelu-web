var app = angular.module('Appelu');

app.factory('reserveFactory', ['$http', function($http){

	var urlBase = 'https://private-9195cfb-reservationsapp.apiary-mock.com/reserves'
	var reserveFactory = {};

	reserveFactory.getShift = function(id){
		return $http.get(urlBase+'/'+id);
	}

	/** 
	reserveFactory.createShift = function(shift){
		return $http.post(urlBase);
	}
	*/

	reserveFactory.getAvailableShifts = function(id){
		return $http.get(urlBase+'/'+id);
	}
	
	reserveFactory.deleteShift = function(id){
		return $http.delete(urlBase+'/'+id);
	}	

	reserveFactory.updateShift = function(shift){
		return $http.put(urlBase+'/'+shift.id, shift);
	}

	reserveFactory.getServiceShifts = function(serviceId){
		return $http.get(urlBase+'?service_id='+serviceId);
	}

	reserveFactory.getUserShifts = function(userId){
		return $http.get(urlBase+'?user_id='+userId);
	}

	return reserveFactory;
}])