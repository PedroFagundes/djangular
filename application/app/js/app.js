var app = angular.module('ContactsApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  })
  .when('/contact/:id', {
    controller: 'ContactController',
    templateUrl: 'views/contact.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
