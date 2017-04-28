var app = angular.module('Appelu');

app.factory('shiftFactory', ['$http', function($http){

	var urlBase = 'https://private-9195cfb-reservationsapp.apiary-mock.com/shifts'
	var shiftFactory = {};

	shiftFactory.getShift = function(id){
		return $http.get(urlBase+'/'+id);
	}

	/** 
	shiftFactory.createShift = function(shift){
		return $http.post(urlBase);
	}
	*/

	shiftFactory.getAvailableShifts = function(id){
		return $http.get(urlBase+'/'+id);
	}
	
	shiftFactory.deleteShift = function(id){
		return $http.delete(urlBase+'/'+id);
	}	

	shiftFactory.updateShift = function(shift){
		return $http.put(urlBase+'/'+shift.id, shift);
	}

	shiftFactory.getServiceShifts = function(serviceId){
		return $http.get(urlBase+'?service_id='+serviceId);
	}

	shiftFactory.getUserShifts = function(userId){
		return $http.get(urlBase+'?user_id='+userId);
	}

	return shiftFactory;
}])