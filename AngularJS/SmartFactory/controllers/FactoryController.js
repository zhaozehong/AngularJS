'use strict';

app.controller("FactoryController", function ($scope, $interval, $location) {
  $scope.charttype = 'pie';
  $scope.getNextUrl = function (eventParams) {
    if (eventParams.name) {
      return "/machine/" + eventParams.name;
    }
  }
});
