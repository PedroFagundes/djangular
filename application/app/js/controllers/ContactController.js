app.controller('ContactController', ['$scope', 'contacts', '$routeParams', function($scope, contacts, $routeParams) {
  contacts.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);