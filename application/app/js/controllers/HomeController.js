app.controller('HomeController', ['$scope', '$http', 'contacts', function($scope, $http, contacts) {
	contacts.success(function(data) {
		$scope.contacts = data;

		$scope.createContact = function() {
			var data = $scope.contact;

			$http.post('http://localhost:8000/api/v1/contacts/', data)
				.success(function() {
					window.location = '/';
				})
		};

		$scope.deleteContact = function(id) {

			var data = {id: id};

			$http({
				method: 'DELETE',
				url: 'http://localhost:8000/api/v1/contacts/',
				data: data,
				headers: {'Content-Type': 'application/json;charset=utf-8'}
			})
			.then(function(response) {
				window.location = '/';
			})

			// $http.delete('http://localhost:8000/api/v1/contacts/', {data: data})
			// 	.success(function() {
			// 		window.location = '/';
			// 	})
		}
	});
}]);