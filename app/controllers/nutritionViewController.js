var app = angular.module('wikiLeeks');

app.controller('nutritionController', function($scope, makePostRequest) {

  $scope.nutrients = makePostRequest.getCurrentRecipe().data.totalNutrients;


});