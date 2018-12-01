'use strict';

var User1Controller = function ($scope, github) {
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

  $scope.username = github.getter();
  $scope.repoSortOrder = "-stargazers_count";

  github.getUser($scope.username).then(onUserComplete, onError);
};

var app = angular.module("projectModule");
app.controller("User1Controller", User1Controller);