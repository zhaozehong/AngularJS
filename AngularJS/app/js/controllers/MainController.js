'use strict';

var MainController = function ($scope, $interval, $location, github) {

  var decrementCountdown = function () {
    $scope.countdown -= 1;
    if ($scope.countdown < 1) {
      $scope.search();
    }
  }

  var countdownInterval = null;
  var startCountDown = function () {
    countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
  }

  $scope.search = function () {
    if (countdownInterval) {
      $interval.cancel(countdownInterval);
      $scope.countdown = null;
    }

    // way 0
    //$location.path("/user/" + $scope.username)

    // way 1
    github.setter($scope.username);
    $location.path("/user1");
  };

  $scope.username = "angular";
  $scope.countdown = 5;
  //startCountDown();
};

var app = angular.module("projectModule");
app.controller("MainController", MainController);