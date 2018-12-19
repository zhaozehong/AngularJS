'use strict';

app.controller("ImageController", function ($scope, $http, $routeParams, data) {
  var categoryData = [];
  var values = [];
  for (var i = 0; i < data.length; i++) {
    categoryData.push(data[i][0]);
    data[i][0] = i;
    values.push(data[i]);
  }

  $scope.name = $routeParams.name;
  $scope.charttype = '';
  $scope.data = {
    candlestick: {},
    OHLC: {
      legend: {
        bottom: 10,
        left: 'center',
        data: ['Dow-Jones index']
      },
      data: {
        categoryData: categoryData,
        values: values
      }
    }
  };
});