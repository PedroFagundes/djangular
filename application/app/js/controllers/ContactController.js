app.controller('ContactController', ['$scope', '$http', 'contacts', '$routeParams', function($scope, $http, contacts, $routeParams) {
  contacts.success(function(data) {
    $scope.contact = data[$routeParams.id];

	$scope.updateContact = function() {
		var data = $scope.contact;

		$http.put('http://localhost:8000/api/v1/contact/' + $scope.contact.id, data)
			.success(function() {
				window.location = '/';
			})
	};

		$scope.deleteContact = function(id) {
			$http.delete('http://localhost:8000/api/v1/contact/' + $scope.contact.id)
				.success(function() {
					window.location = '/';
				})
		}
  });
}]);