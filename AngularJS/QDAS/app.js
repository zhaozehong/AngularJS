'use strict';

var app = angular.module("qdasModule", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "QDAS/views/main.html",
      controller: "MainController"
    })
    .otherwise({ redirectTo: "/" });
});
app.directive('sfchartelement', function ($timeout) {
  //<sfchartelement data="data" charttype="qdasIndValueChart" datakey="qdasIndValueChart" chart="chart" id="id1"></sfchartelement>
  return {
    scope: {
      chart: "=",
      data: "=",
      datakey: "@",
      charttype: "@",
      interact: "&"
    },
    restrict: 'E',
    template: '<div style="height:100%; margin-left:10px; margin-right:10px;"></div>',
    replace: true,
    link: function ($scope, element, attrs, controller) {
      $timeout(function () {
        var option = sfchart.getEChartOption($scope.charttype, $scope.data, $scope.datakey);
        if (option && typeof option === "object" && element && element.length == 1) {
          //var eChart = echarts.init(document.getElementById($scope.id));
          //var eChart = echarts.init(document.getElementById(attrs["id"]));
          var eChart = echarts.init(element[0]); // the element[0] is not sfchartelement, but the element assigned in directive.template
          $scope.chart = eChart;

          eChart.showLoading();
          eChart.setOption(option, false);
          eChart.hideLoading();

          window.addEventListener('resize', function () {
            eChart.resize();
          })

          eChart.on('dblclick', function (params) {
            if (!$scope.dblclick)
              return;

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

            $scope.dblclick({ params: params })
          });
        }
      }, 1);
    }
  };
});