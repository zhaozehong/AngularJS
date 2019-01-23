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
        subgroup: {
          subgroupSize: 3,
          weightWidth: 2,
          highlightColor: 'blue',

        },
        tolerance: {
          show: true,
          usl: 25,
          lsl: 10,
          markBeyondUsl: {
            show: true,
            symbol: 'arrow',
            symbolSize: qdasHelper.markerPointSize,
            color: 'red',
            rotate: 0,
          },
          markBeyondLsl: {
            show: true,
            symbol: 'arrow',
            symbolSize: qdasHelper.markerPointSize,
            color: 'red',
            rotate: 180,
          },
          subgroupSize: 3,
          subgroupSize: 3,
        },

        markBeyondUsl: {
          show: true,
          symbol: 'arrow',
          symbolSize: qdasHelper.markerPointSize,
          color: 'red',
          rotate: 0,
        },
        markBeyondLsl: {
          show: true,
          symbol: 'arrow',
          symbolSize: qdasHelper.markerPointSize,
          color: 'red',
          rotate: 180,
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
        color: 'green',
        symbolSize: qdasHelper.normalPointSize,
        width: 1,

        pointsData: [
          {
            value: 15,
          }, {
            value: 5,
            marker: {
              symbol: 'arrow',
              symbolSize: qdasHelper.markerPointSize,
              rotate: 180,
              color: 'red'
            }
          }, {
            value: 35,
            marker: {
              symbolSize: qdasHelper.markerPointBigSize,
            }
          }, {
            value: 10,
          }, {
            value: 0,
          }, {
            value: 45,
          }, {
            value: 15,
            marker: {
              symbolSize: qdasHelper.markerPointBigSize
            }
          }
        ],
        markPointsData: [{
          type: 'average', // can be 'max', 'min' or 'average'
          symbol: 'arrow',
          symbolSize: qdasHelper.markerPointSize,
          color: 'black'
        }],
        markLineData: {
          enableHit: false,
          symbol: 'none',
          horizontalLinesData: [
            {
              name: 'Xlo3',
              axisValue: 10,
              lineStyle: {
                type: 'dashed',
                color: 'blue'
              }
            }, {
              name: 'LSL',
              axisValue: 20,
              lineStyle: {
                type: 'solid',
                color: 'red'
              }
            }, {
              name: 'X',
              axisValue: 30,
              lineStyle: {
                type: 'dashed',
                color: 'blue'
              }
            }, {
              name: 'USL',
              axisValue: 40,
              lineStyle: {
                type: 'solid',
                color: 'red'
              }
            }, {
              name: 'Xup3',
              axisValue: 50,
              lineStyle: {
                type: 'dashed',
                color: 'blue'
              }
            }
          ]
        }
      }
    }
  };

  function getUpdatedData() {
  }
});
