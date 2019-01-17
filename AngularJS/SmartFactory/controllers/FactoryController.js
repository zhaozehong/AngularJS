'use strict';

app.controller("FactoryController", function ($scope, $timeout, $location, $routeParams) {
  var departmentData = [
    {
      name: "Dept. 1",
      children: [
        { name: "Machine 1", value: 4116 }
      ]
    },
    {
      name: "Dept. 2",
      children: [
        { name: "Machine 2", value: 1316 },
        { name: "Machine 3", value: 3151 },
        { name: "Machine 4", value: 3770 },
        { name: "Machine 5", value: 2435 },
        { name: "Machine 6", value: 4839 }
      ]
    },
    {
      name: "Dept. 3",
      children: [
        { name: "Machine 7", value: 8833 },
        { name: "Machine 8", value: 5471 },
        { name: "Machine 9", value: 3333 }
      ]
    }
  ];

  $scope.name = $routeParams.name;
  $scope.data = {
    pie: {
      data: function () {
        var serie = [];
        for (var i = 0; i < departmentData.length; i++) {
          var item = {};
          item.name = departmentData[i].name;
          item.value = departmentData[i].children.length;
          serie.push(item);
        }
        return serie;
      }(),
    },
    multitree: {
      name: $routeParams.name + " Factory",
      children: departmentData
    },
  };

  $scope.chartInteraction = function (eventParams) {
    if (eventParams.name) {
      $timeout(function () {
        $location.path("/machine/" + eventParams.name);
      }, 1);
    }
  }
});
