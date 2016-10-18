var app = angular.module('wikiLeeks');

app.controller('recipeInputController', function($scope, $http) {
  $scope.recipe = {};

  $scope.recipe.ingr = [];

  $scope.addIngredient = function() {
    $scope.recipe.ingr.push($scope.ingredient);
    $scope.ingredient = '';
    $scope.recipe.title = $scope.title;
  };

  $scope.removeItem = function(item) {
    var index = $scope.recipe.ingr.indexOf(item);
    $scope.recipe.ingr.splice(index, 1);
  };

  $scope.checkForEnterKey = function(keyEvent) {
    if (keyEvent.which === 13) {
      $scope.addIngredient();
    }
  };

  $scope.analyzeRecipe = function() {
    console.log('POSTING');
    $http({
      method: 'POST',
      url: '/analyzeRecipe',
      headers: {
         'Content-Type': 'application/json'
       },
       data: $scope.recipe
    }).then(function successCallback(response) {
        console.log('Successful Request');
      }, function errorCallback(response) {
        console.log('Request failed');
      });
  };


});