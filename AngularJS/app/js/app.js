'use strict';

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
    .when("/user1", {
      templateUrl: "app/js/views/user.html",
      controller: "User1Controller"
    })

    .when("/repo/:username/:reponame", {
      templateUrl: "app/js/views/repo.html",
      controller: "RepoController"
    })
    .when("/chart/:charttype", {
      templateUrl: "app/js/views/sfchart.html",
      controller: "SFChartController"
    })
    .when("/test", {
      templateUrl: "app/js/views/ATEST.html",
      controller: "ATESTController"
    })
    .otherwise({ redirectTo: "/main" });
});
