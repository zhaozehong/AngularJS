﻿'use strict';

var app = angular.module("projectModule", ["ngRoute", "customModule"]);
app.config(function ($routeProvider, $locationProvider) {
  //$locationProvider.hashPrefix("");
  $routeProvider
    .when("/main", {
      templateUrl: "app/js/views/main.html",
      controller: "MainController"
    })
    .when("/user/:username", {
      templateUrl: "app/js/views/user.html",
      controller: "UserController"
    })
    .when("/repo/:username/:reponame", {
      templateUrl: "app/js/views/repo.html",
      controller: "RepoController"
    })//collaborators is no longer used, replace it with contributors
    .when("/line", {
      templateUrl: "app/js/views/line.html",
      controller: "LineController"
    })
    .when("/pie", {
      templateUrl: "app/js/views/pie.html",
      controller: "PieController"
    })
    .otherwise({ redirectTo: "/main" });
});