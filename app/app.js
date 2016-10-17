var app = angular.module('wikiLeeks', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/homepage.html',
    controller: 'homepageController'
  })
  .otherwise({
    templateUrl: 'partials/homepage.html',
    controller: 'homepageController'
  });

});
