var app = angular.module('wikiLeeks', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/homepage.html',
    controller: 'homepageController'
  })
  .otherwise({
    templateUrl: 'views/homepage.html',
    controller: 'homepageController'
  });

});
