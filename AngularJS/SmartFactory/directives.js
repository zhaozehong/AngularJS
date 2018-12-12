﻿'use strict';

app.directive('sfchartelement', function ($timeout) {
  return {
    scope: {
      data: "=",
      charttype: "@",
      interact: "&"
    },
    restrict: 'E',
    template: '<div style="height: 100%; margin-left: 10px; margin-right: 10px"></div>',
    replace: true,
    link: function ($scope, element, attrs, controller) {
      $timeout(function () {
        var option = sfchart.getEChartOption($scope.charttype, $scope.data);
        if (option && typeof option === "object" && element && element.length == 1) {
          //var myChart = echarts.init(document.getElementById($scope.id));
          //var myChart = echarts.init(document.getElementById(attrs["id"]));
          var myChart = echarts.init(element[0]);

          myChart.showLoading();
          myChart.setOption(option);
          myChart.hideLoading();

          myChart.on('dblclick', function (params) {
            if (params.componentType === 'markPoint') {
              // 点击到了 markPoint 上
              if (params.seriesIndex === 5) {
                // 点击到了 index 为 5 的 series 的 markPoint 上。
              }
            }
            else if (params.componentType === 'series') {
              if (params.componentSubType == "tree") {
                if (params.data.children)
                  return;
              }
            }

            $scope.interact({ chart: myChart, params: params })
          });
        }
      }, 1);
    }
  };
});