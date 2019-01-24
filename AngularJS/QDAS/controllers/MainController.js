'use strict';

app.controller("MainController", function ($scope, $timeout, $location) {
  $scope.apply = function () {
    if (!$scope.chart)
      return;

    $scope.chart.clear();
    $scope.chart.setOption(sfchart.getEChartOption("qdasIndValueChart", $scope.data), false);
  };
  $scope.data = {
    line: {},
    qdasIndValueChart: {
      // it includes all configurations on options view
      qdasOptions: {
        showRemovedValues: "On",
        displayMode: "Successive",
        showSymbols: true,
        showGrid: false,
        subgroup: {
          subgroupSize: 3,
          weightWidth: 2,
          highlightColor: 'blue',

        },
        tolerance: {
          show: true,
          usl: 40,
          lsl: 20,
          markBeyondUsl: {
            show: true,
            showValue: true,
            symbol: sfchart.symbolTypes.arrow,
            symbolSize: sfchart.symbolSizes.normal,
            color: 'red',
            rotate: 0,
          },
          markBeyondLsl: {
            show: true,
            showValue: true,
            symbol: sfchart.symbolTypes.arrow,
            symbolSize: sfchart.symbolSizes.normal,
            color: 'red',
            rotate: 180,
          },
        },
      },

      // NOT show on options view
      textStyle: {
        color: '#fff',
        fontStyle: 'normal', // Q-DAS supports: 'normal', 'italic', 'oblique'
        fontWeight: 'normal', // Q-DAS supports: 'narrow', 'italic', 'regular', 'bold', 'black', 'oblique'
        fontFamily: 'sans-serif',
        fontSize: 12
      },
      xAxisData: {
        show: true,
        title: 'Value No. ->',
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labelStyle: {
          show: true,
          rotate: 0,
          formatter: null,
          fontSize: 15,
          fontColor: '#d4a',
          fontStyle: 'oblique',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          backgroundColor: 'transparent',
          // shadow...
        },
        titleStyle: {
          fontSize: 18,
          fontColor: '#000',
          fontStyle: '',
          fontWeight: '',
          fontFamily: 'sans-serif',
        }
      },
      yAxisData: {
        show: true,
        title: 'Data (mm) ->',
        labelStyle: {
          show: true,
          rotate: 0,
          formatter: null,
          fontSize: 15,
          fontColor: '#970',
          fontStyle: 'oblique',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          backgroundColor: 'transparent',
          // shadow...
        },
        titleStyle: {
          fontSize: 18,
          fontColor: '#fff',
          fontStyle: 'italic',
          fontWeight: 'narrow',
          fontFamily: 'sans-serif',
        }
      },
      lineData: {
        width: 1,
        color: 'green',
        symbol: sfchart.symbolTypes.circle,
        symbolSize: sfchart.symbolSizes.small,

        pointsData: [
          {
            value: 15,
          }, {
            value: 5,
          }, {
            value: 35,
            marker: {
              symbol: sfchart.symbolTypes.diamond,
              symbolSize: sfchart.symbolSizes.normal,
            }
          }, {
            value: 10,
          }, {
            value: 0,
          }, {
            value: 45,
          }, {
            value: 15,
          }
        ],
        markPointsData: [{
          type: sfchart.specialMarkTypes.average, // can be 'max', 'min' or 'average'
          symbol: sfchart.symbolTypes.rect,
          symbolSize: sfchart.symbolSizes.normal,
          color: 'black',
        }],
        markLineData: {
          enableHit: false,
          symbol: sfchart.symbolTypes.none,
          horizontalLinesData: [
            {
              name: 'Xlo3',
              axisValue: 10,
              lineStyle: {
                type: sfchart.lineTypes.dashed,
                color: 'blue'
              }
            }, {
              name: 'X',
              axisValue: 30,
              lineStyle: {
                type: sfchart.lineTypes.dashed,
                color: 'blue'
              }
            }, {
              name: 'Xup3',
              axisValue: 50,
              lineStyle: {
                type: sfchart.lineTypes.dashed,
                color: 'blue'
              }
            }
          ]
        }
      }
    }
  };
});
