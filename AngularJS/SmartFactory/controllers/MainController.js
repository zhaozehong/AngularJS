'use strict';

var MainController = function ($scope, $interval, $location) {
  $scope.charttype = 'map2d';
  $scope.getNextUrl = function (eventParams) {
    if (eventParams.name) {
      return "/factory/" + eventParams.name;
    }
  }
};

app.controller("MainController", MainController);
app.directive('sfchartelement', function ($location) {
  return {
    scope: {
      legend: "=legend11",
      item: "=item11",
      data: "=data11",
      charttype: "@",

      next: "&nextUrl"
    },
    restrict: 'E',
    template: '<div style="height: 100%; margin-left: 10px; margin-right: 10px"></div>',
    replace: true,
    link: function ($scope, element, attrs, controller) {
      var option = sfchart.getEChartOption($scope.charttype);
      if (option && typeof option === "object" && element && element.length == 1) {
        //var myChart = echarts.init(document.getElementById($scope.id));
        //var myChart = echarts.init(document.getElementById(attrs["id"]));
        var myChart = echarts.init(element[0]);

        myChart.showLoading();
        myChart.setOption(option);
        myChart.hideLoading();

        myChart.on('dblclick', function (params) {
          // let's always go to next
          var nextUrl = $scope.next({ params: params });
          if (nextUrl) {
            $location.path(nextUrl);
            window.location = $location.$$absUrl;
          }

          if (params.componentType === 'markPoint') {
            // 点击到了 markPoint 上
            if (params.seriesIndex === 5) {
              // 点击到了 index 为 5 的 series 的 markPoint 上。
            }
          }
          else if (params.componentType === 'series') {
            
          }
        });
      }
    }
  };
});