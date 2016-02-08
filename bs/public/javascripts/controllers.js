var app = angular.module('bigspace', [])

 app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });


  app.controller('HomeController', function($scope){
    $scope.name = "dave";
  });
