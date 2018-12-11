'use strict';

app.controller("MainController", function ($scope, $timeout, $location) {
  $scope.charttype = 'map2d';
  $scope.data = {};
  $scope.chartInteraction = function (chart, eventParams) {
    if (eventParams.name) {
      $timeout(function () {
        $location.path("/factory/" + eventParams.name);
      }, 1);
    }
  }
});