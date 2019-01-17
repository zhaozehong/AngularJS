'use strict';

app.controller('SFChartController', function ($scope, $routeParams) {
  $scope.charttype = $routeParams.charttype;
});
app.directive('sfchartelement', function () {
  return {
    scope: {
      id: "@",
      charttype: '=',
      legend: "=legend11",
      item: "=item11",
      data: "=data11",
    },
    restrict: 'E',
    template: '<div style="height:400px;"></div>',
    replace: true,
    link: function ($scope, element, attrs, controller) {
      var option = sfchart.getEChartOption($scope.$parent.charttype);
      var myChart = echarts.init(document.getElementById($scope.id));
      myChart.setOption(option);
    }
  };
});