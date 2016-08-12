app.controller('HomeController', ['$scope', 'contacts', function($scope, contacts) {
  contacts.success(function(data) {
    $scope.contacts = data;
  });
}]);