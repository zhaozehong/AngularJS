var app = angular.module("projectModule");
app.controller("menuController", function ($scope) {
  $scope.menus = [
    {
      "name": "Angular JS",
      "href": "#/main"
    },
    {
      "name": "Line",
      "href": "#/line"
    },
    {
      "name": "Pie",
      "href": "#/pie"
    },
    {
      "name": "Test",
      "href": "#/test"
    }
  ];
});