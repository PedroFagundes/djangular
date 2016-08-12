var app = angular.module('ContactsApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  })
  .when('/photos/:id', {
    controller: 'PhotoController',
    templateUrl: 'views/photo.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
