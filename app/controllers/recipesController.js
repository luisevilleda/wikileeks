var app = angular.module('wikiLeeks');

app.controller('recipesController', function($scope, getRecipes, $http) {
  getRecipes.getAllRecipes(function(data) {
    // console.log(data);
    $scope.recipes = data;
    // $scope.obj = data[3];
    // $scope.type = typeof $scope.recipes[3].ingr;

    $scope.populateModal = function(recipe) {
      $scope.currentNutrients = JSON.parse(JSON.parse(recipe.nutrients)).totalNutrients;
    };

  });
});