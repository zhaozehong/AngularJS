'use strict';

app.controller("MainController", function ($scope, $timeout, $location) {
  $scope.displayMode = "Successive";
  $scope.showSymbols = true;
  $scope.showRemovedValues = "On";
  $scope.apply = function () {
    if (!$scope.chart)
      return;

    let option = getOption();
    $scope.chart.setOption(option, false);
  };
  $scope.data = {
    line: {},
    qdasIndValueChart: {
      xAxisData: {
        title: 'Value No. ->',
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxisData: {
        title: 'Data (mm) ->'
      },
      seriesData: [
        {
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
            }
            , {
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
            type: 'max',
            symbol: 'arrow',
            symbolSize: qdasHelper.markerPointSize,
            rotate: 0,
            color: 'red'
          }, {
            type: 'min',
            symbol: 'arrow',
            symbolSize: qdasHelper.markerPointSize,
            rotate: 180,
            color: 'red'
          }],
          markLineData: {
            enableHit: false,
            symbol: 'none',
            xAxisLinesData: [
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
      ]
    }
  };

  Array.prototype.getIndexes = function (obj) {
    var returnArray = [];
    for (var i = 0; i < this.length; i += 1) {
      if (this[i] === obj) {
        returnArray.push(i);
      }
    }
    return returnArray;
  }

  function getOption() {
    if (!$scope.chart)
      return;

    var option = $scope.chart.getOption();
    // handle displayMode
    switch ($scope.displayMode) {
      case "LineOff":
        option.series[0].lineStyle.width = 0;
        break;
      case "Subgroups":
        break;
      case "Highlighted":
        break;
      case "highlightedInColor":
        break;
      case "Deviation":
        break;
      default: // "Successive"
        option.series[0].lineStyle.width = 1;
    }
    // handle showSymbols
    if ($scope.showSymbols) {
      option.series[0].markPoint.data = [
        {
          name: 'max',
          type: 'max',
          symbol: 'arrow',
          symbolSize: qdasHelper.markerPointSize,
          symbolRotate: 0,
          itemStyle: {
            color: 'red'
          }
        },
        {
          name: 'min',
          type: 'min',
          symbol: 'arrow',
          symbolSize: qdasHelper.markerPointSize,
          symbolRotate: 180,
          itemStyle: {
            color: 'red'
          }
        }
      ];
    } else {
      option.series[0].markPoint.data = [];
    }

    // handle showRemovedValues
    switch ($scope.showRemovedValues) {
      case "OffWithBridging":
        break;
      case "OffWithoutBridging":
        break;
      default: // "On"
    }

    return option;
  }
});
