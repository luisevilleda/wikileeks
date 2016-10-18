var app = angular.module('wikiLeeks');

app.controller('recipeInputController', function($scope, $location, makePostRequest) {
  $scope.recipe = {
    title: '',
    ingr: [],
    yield: null
  };

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
    // if ($scope.title) {
      makePostRequest.makePostRequest($scope.recipe, function() {
        $location.path('/nutrition');
      });
    // } else {
    //   window.alert('Title is required.');
    // }
  };

});