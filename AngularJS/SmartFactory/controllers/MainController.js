'use strict';

var MainController = function ($scope, $interval, $location) {
  $scope.charttype = 'line';
  $scope.getNextUrl = function (eventParams) {
    if (eventParams.name) {
      //return "/factory/" + eventParams.name;
      return "/machine/" + eventParams.name;
    }
  }
};

app.controller("MainController", MainController);
app.directive('sfchartelement', function ($location) {
  return {
    scope: {
      id: "@",
      legend: "=legend11",
      item: "=item11",
      data: "=data11",
      charttype: "=charttype",
      fixedcharttype: "@"
    },
    restrict: 'E',
    template: '<div style="height: 100%; margin-left: 10px; margin-right: 10px"></div>',
    replace: true,
    link: function ($scope, element, attrs, controller) {
      element.on("click", function (params) {

      });

      var option = sfchart.getEChartOption($scope.fixedcharttype ? $scope.fixedcharttype : $scope.charttype);
      if (option && typeof option === "object") {
        var myChart = echarts.init(document.getElementById($scope.id));

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
          else if (params.componentType === 'series' && params.seriesType === 'map') {
            var nextUrl = $scope.$parent.getNextUrl(params);
            if (nextUrl) {
              $location.path(nextUrl);
              window.location = $location.$$absUrl;
            }
          }
        });

      }
    }
  };
});