app.factory('contacts', ['$http', function($http) {
	return $http.get('http://localhost:8000/api/v1/contacts')
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		})
}]);