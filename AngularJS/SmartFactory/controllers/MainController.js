'use strict';

app.controller("MainController", function ($scope, $timeout, $location) {
  $scope.charttype = 'map2d';
  $scope.data = {
    map2d: {},
    map3d: {},
    ring: {
      radius: ['90%', '95%'],
      graphic: { fontSize: 20, fontWeight: 'bold' },
      data: {
        name: "finished",
        value: 0.2,
        color: "#88B3CB"
      }
    },
    ring1: {
      radius: ['90%', '95%'],
      graphic: { fontSize: 20, fontWeight: 'bold' },
      data: {
        name: "finished",
        value: 0.66,
        color: "#3E98C7"
      }
    },
    ring2: {
      radius: ['90%', '95%'],
      graphic: { fontSize: 20, fontWeight: 'bold' },
      data: {
        name: "finished",
        value: 0.66,
        color: "#FF8889"
      }
    },
    ring3: {
      radius: ['90%', '95%'],
      graphic: { fontSize: 20, fontWeight: 'bold' },
      data: {
        name: "finished",
        value: 0.66,
        color: "#FFFFFF"
      }
    },
    ring4: {
      radius: ['0%', '95%'],
      graphic: { fontSize: 20, fontWeight: 'bold' },
      data: {
        name: "finished",
        value: 0.66,
        color: "#3E98C7"
      }
    },
    ring5: {
      radius: ['90%', '95%'],
      graphic: { fontSize: 20, fontWeight: 'bold' },
      data: {
        name: "finished",
        value: 0.66,
        color: "#3E98C7"
      }
    }
  };
  $scope.chartInteraction = function (chart, eventParams) {
    if (eventParams.name) {
      $timeout(function () {
        //$location.path("/factory/" + eventParams.name);
        $location.url("/factory/" + eventParams.name);
      }, 1);
    }
  }
});