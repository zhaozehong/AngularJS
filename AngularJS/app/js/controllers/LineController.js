'use strict';

var app = angular.module('projectModule');

app.controller('LineController', function ($scope) {
  $scope.legend = ["PH值", "溶解氧", "电导率", "温度值", "浊度值"];
  $scope.item = ["8:45", "8:47", "8:49", "8:51", "8:53", "8:55", "8:57", "8:59"];
  $scope.data = [
    ["7.95", "7.71", "7.16", "7.77", "7.99", "7.76", "7.91", "7.76"],
    ["8.42", "32.23", "33.44", "17.16", "7.08", "7.29", "7.18", "7.3"],
    ["257.85", "254.65", "253", "279.8", "206.6", "271.08", "286.24", "263.5"],
    ["25.75", "20.46", "21.05", "20.58", "20.7", "20.58", "20.45", "20.58"],
    ["8.08", "3.83", "2.79", "6.39", "7.75", "7.81", "7.58", "7.81"]
  ];
});
app.directive('hexagonLine', function () {
  return {
    scope: {
      id: "@",
      legend: "=",
      item: "=",
      data: "="
    },
    restrict: 'E',
    template: '<div style="height:400px;"></div>',
    replace: true,
    link: function ($scope, element, attrs, controller) {
      var option = {
        // 提示框，鼠标悬浮交互时的信息提示
        tooltip: {
          show: true,
          trigger: 'item'
        },
        // 图例
        legend: {
          data: $scope.legend
        },
        // 横轴坐标轴
        xAxis: [{
          type: 'category',
          data: $scope.item
        }],
        // 纵轴坐标轴
        yAxis: [{
          type: 'value'
        }],
        // 数据内容数组
        series: function () {
          var serie = [];
          for (var i = 0; i < $scope.legend.length; i++) {
            var item = {
              name: $scope.legend[i],
              type: 'line',
              data: $scope.data[i]
            };
            serie.push(item);
          }
          return serie;
        }()
      };
      var myChart = echarts.init(document.getElementById($scope.id));
      myChart.setOption(option);
    }
  };
});