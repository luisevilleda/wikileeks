var app = angular.module('wikiLeeks');

app.controller('recipeInputController', function($scope, makePostRequest) {
  $scope.recipe = {
    title: 'Title',
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

  $scope.analyzeRecipe = function(recipe) {
    makePostRequest.makePostRequest(recipe);
  };

  // function() {
  //   console.log('POSTING');
  //   $http({
  //     method: 'POST',
  //     url: '/analyzeRecipe',
  //     headers: {
  //        'Content-Type': 'application/json'
  //      },
  //      data: JSON.stringify($scope.recipe)
  //   }).then(function successCallback(response) {
  //       console.log(response);
  //     }, function errorCallback(response) {
  //       console.log('Request failed');
  //     });
  // };

});