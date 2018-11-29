'use strict';

var RepoController = function ($scope, $routeParams, github) {

  var onRepo = function (data) {
    $scope.repo = data;
  };
  var onError = function (reason) {
    $scope.error = reason;
  };

  var reponame = $routeParams.reponame;
  var username = $routeParams.username;
  github.getRepoDetails(username, reponame)
    .then(onRepo, onError);
};

var app = angular.module("projectModule");
app.controller("RepoController", RepoController);