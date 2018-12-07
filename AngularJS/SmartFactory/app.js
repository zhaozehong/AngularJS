'use strict';

var app = angular.module("sfModule", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/main", {
      templateUrl: "SmartFactory/views/main.html",
      controller: "MainController"
    })
    .when("/factory/:name", {
      templateUrl: "SmartFactory/views/factory.html",
      controller: "FactoryController"
    })
    .when("/machine/:name", {
      templateUrl: "SmartFactory/views/machine.html",
      controller: "MachineController"
    })
    .otherwise({ redirectTo: "/main" });
});
