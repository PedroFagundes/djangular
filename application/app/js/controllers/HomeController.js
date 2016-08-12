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
			$http.delete('http://localhost:8000/api/v1/contact/' + id)
				.success(function() {
					window.location = '/';
				})
		}
	});
}]);