var app = angular.module('wikiLeeks');

app.factory('getRecipes', function($http) {

  var factory = {};

  factory.getAllRecipes = function(cb) {
    $http({
      method: 'GET',
      url: '/recipes'
    }).then(function successCallback(response) {
      // console.log(response.data);
        cb(response.data);
      }, function errorCallback(response) {
        console.log('Request failed');
      });
  };

  factory.getOneRecipe = function(id, cb) {
    console.log('GETTING');
    $http({
      method: 'GET',
      url: '/recipes?id=' + id
    }).then(function successCallback(response) {
      // console.log(response.data);
        cb(response.data);
      }, function errorCallback(response) {
        console.log('Request failed');
      });
  };

  return factory;
});