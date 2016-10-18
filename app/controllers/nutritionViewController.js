var app = angular.module('wikiLeeks');

app.controller('nutritionController', function($scope, makePostRequest, $http) {
  $scope.nutrients = makePostRequest.getCurrentRecipe().data.totalNutrients;

});