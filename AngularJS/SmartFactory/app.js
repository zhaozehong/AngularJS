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
    .when("/image/:name", {
      templateUrl: "SmartFactory/views/image.html",
      controller: "ImageController",
      resolve: {
        data: function ($http, dataService) {
          //return $http.get("https://ecomfe.github.io/echarts-examples/public/data/asset/data/stock-DJI.json");
          return dataService.getImageData();
        }
      }
      
    })

    .otherwise({ redirectTo: "/main" });
});
