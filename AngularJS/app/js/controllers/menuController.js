var app = angular.module("projectModule");
app.controller("menuController", function ($scope) {
  $scope.menus = [
    {
      "name": "Angular JS",
      "href": "#/main"
    },
    {
      "name": "Line",
      "href": "#/chart/line"
    },
    {
      "name": "Stacked Area",
      "href": "#/chart/stackedarea"
    },
    {
      "name": "Bar",
      "href": "#/chart/bar"
    },
    {
      "name": "Pie",
      "href": "#/chart/pie"
    },
    {
      "name": "Radar",
      "href": "#/chart/radar"
    },
    {
      "name": "Sunburst",
      "href": "#/chart/sunburst"
    },
    {
      "name": "Heatmap",
      "href": "#/chart/heatmap"
    },
    {
      "name": "Gauge Car",
      "href": "#/chart/gaugecar"
    },
    {
      "name": "Test",
      "href": "#/test"
    }
  ];
});