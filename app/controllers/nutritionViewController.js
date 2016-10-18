var app = angular.module('wikiLeeks');

app.controller('nutritionController', function($scope, makePostRequest, $http) {
  $scope.res = makePostRequest.getCurrentRecipe();
  $scope.nutrients = $scope.res.data.totalNutrients;
  $scope.error = $scope.res;
});