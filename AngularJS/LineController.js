var LineController = function ($scope, $routeParams, github) {
  var onDataComplete = function (data) {
    $scope.data = data;
  };
  var onError = function (reason) {
    $scope.error = "Could not fetch the data.";
  };


  github.getChartData("line").then(onDataComplete, onError);
};

var app = angular.module("githubViewer");
app.controller("LineController", LineController);