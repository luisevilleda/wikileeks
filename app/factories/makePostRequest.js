var app = angular.module('wikiLeeks');

app.factory('makePostRequest', function($http) {

  var factory = {};

  factory.makePostRequest = function(recipe) {
    console.log('POSTING');
    $http({
      method: 'POST',
      url: '/analyzeRecipe',
      headers: {
         'Content-Type': 'application/json'
       },
       data: JSON.stringify(recipe)
    }).then(function successCallback(response) {
        currentRecipe = response;
      }, function errorCallback(response) {
        console.log('Request failed');
      });
  };

  factory.getCurrentRecipe = function() {
    return currentRecipe;
  };


  return factory;
});