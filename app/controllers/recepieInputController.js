var app = angular.module('wikiLeeks');

app.controller('recepieInputController', function($scope, $http) {
  $scope.recepie = {};

  $scope.recepie.ingredients = [];

  $scope.addIngredient = function() {
    $scope.recepie.ingredients.push($scope.ingredient);
    $scope.ingredient = '';
    $scope.recepie.title = $scope.title;
  };

  $scope.removeItem = function(item) {
    console.log(item);
    var index = $scope.recepie.ingredients.indexOf(item);
    $scope.recepie.ingredients.splice(index, 1);
  };

  $scope.checkForEnterKey = function(keyEvent) {
    if (keyEvent.which === 13) {
      console.log(keyEvent);
      $scope.addIngredient();
    }
    console.log($scope.recepie);
  };

  $scope.analyzeRecepie = function() {
    console.log('POSTING');
    $http({
      method: 'POST',
      url: '/analyzeRecepie',
      headers: {
         'Content-Type': 'application/json'
       },
       data: $scope.recepie
    }).then(function successCallback(response) {
        console.log('Successful Request');
      }, function errorCallback(response) {
        console.log('Request failed');
      });
  };


});