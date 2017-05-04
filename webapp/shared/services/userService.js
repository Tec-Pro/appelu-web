var app = angular.module('Appelu');

app.factory('userFactory', ['$http', function($http){

	var urlBase = 'https://hidden-scrubland-50080.herokuapp.com/api/v1/users' //'https://private-9195cfb-reservationsapp.apiary-mock.com/users'
	var userFactory = {};

	userFactory.getUsers = function(){
		return $http.get(urlBase);
	}

	userFactory.getUser = function(id){
		return $http.get(urlBase+'/'+id);
	}

	userFactory.deleteUser = function(id){
		return $http.delete(urlBase+'/'+id);
	}

	userFactory.updateUser = function(user, id){
		return $http.put(urlBase+'/'+id, user);
	}

	userFactory.createUser = function(user){
		console.log(user);
		return $http.post(urlBase, user);
		/*return $http({
				method: 'POST',
				headers: {'Content-Type':'application/json'},
				data: user,
				url: urlBase
		});*/
	}

	return userFactory;
}])