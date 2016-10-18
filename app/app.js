var app = angular.module('wikiLeeks', ['ngRoute', 'angular-toArrayFilter']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/homepage.html',
    controller: 'homepageController'
  })
  .when('/nutrition', {
    templateUrl: 'views/nutritionView.html',
    controller: 'nutritionController'
  })
  .otherwise({
    templateUrl: 'views/homepage.html',
    controller: 'homepageController'
  });

});
