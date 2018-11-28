var UserController = function ($scope, $routeParams, $location, github) {
  var onUserComplete = function (data) {
    $scope.user = data;
    github.getRepos($scope.user).then(onRepos, onError);
  };
  var onRepos = function (data) {
    $scope.repos = data;
  };
  var onError = function (reason) {
    $scope.error = "Could not fetch the data.";
  };


  $scope.username = $routeParams.username;
  $scope.repoSortOrder = "-stargazers_count";
  $scope.createPie = function () {
    $location.path("/pie");
  };

  github.getUser($scope.username).then(onUserComplete, onError);
};

var app = angular.module("githubViewer");
app.controller("UserController", UserController);