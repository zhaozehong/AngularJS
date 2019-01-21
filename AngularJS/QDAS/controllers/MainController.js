'use strict';

app.controller("MainController", function ($scope, $timeout, $location) {
  $scope.displayMode = "Successive";
  $scope.showSymbols = true;
  $scope.showRemovedValues = "On";
  $scope.subgroupSize = 3;
  $scope.apply = function () {
    if (!$scope.chart)
      return;

    $scope.chart.clear();
    $scope.chart.setOption(sfchart.getEChartOption("qdasIndValueChart", getUpdatedData()), false);
  };
  $scope.data = {
    line: {},
    qdasIndValueChart: {
      highlightedColor: 'blue',
      weightWidth: 2,
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
          fontColor: '#231',
          fontStyle: 'oblique',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          backgroundColor: 'transparent',
          // shadow...
        },
        titleTextStyle: {
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
        titleTextStyle: {
          fontSize: 18,
          fontColor: '#fff',
          fontStyle: 'italic',
          fontWeight: 'narrow',
          fontFamily: 'sans-serif',
        }
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

  function getUpdatedData() {
    var data = Helper.deepClone($scope.data);

    // handle displayMode
    switch ($scope.displayMode) {
      case "LineOff":
        data.qdasIndValueChart.seriesData.forEach(v => v.width = 0);
        break;
      case "Subgroups":
        subgroups(false, false, false);
        break;
      case "Highlighted":
        subgroups(true, false, true);
        break;
      case "highlightedInColor":
        subgroups(false, true, false);
        break;
      case "Deviation":
        break;
      default: // "Successive"
      // do nothing
    }
    // handle showSymbols
    if (!$scope.showSymbols) {
      for (let i = 0; i < data.qdasIndValueChart.seriesData.length; i++) {
        let serieData = data.qdasIndValueChart.seriesData[i];
        if (serieData) {
          delete serieData.markPointsData;
          for (let j = 0; j < serieData.pointsData.length; j++) {
            let pointData = serieData.pointsData[j];
            if (pointData.marker)
              delete pointData.marker;
          }
        }
      }
    }

    // handle showRemovedValues
    switch ($scope.showRemovedValues) {
      case "OffWithBridging":
        break;
      case "OffWithoutBridging":
        break;
      default: // "On"
    }

    return data;

    function subgroups(isSubgroupConnected, showDifferentColor, showWeightWidth) {
      data.qdasIndValueChart.seriesData.push(Helper.deepClone(data.qdasIndValueChart.seriesData[0]));
      if (isSubgroupConnected) {
        data.qdasIndValueChart.seriesData.push(Helper.deepClone(data.qdasIndValueChart.seriesData[0]));
      }

      var serie1 = data.qdasIndValueChart.seriesData[0];
      var serie2 = data.qdasIndValueChart.seriesData[1];
      var serie3 = data.qdasIndValueChart.seriesData[2];
      if (serie3) {
        serie3.width = 1;
      }
      if (showDifferentColor) {
        serie2.color = data.qdasIndValueChart.highlightedColor;
      }
      if (showWeightWidth) {
        serie1.width = data.qdasIndValueChart.weightWidth;
        serie2.width = data.qdasIndValueChart.weightWidth;
      }

      let pointsCount = serie1.pointsData.length;
      for (let i = 0; i < pointsCount; i += $scope.subgroupSize) {
        for (let j = 0; j < $scope.subgroupSize; j++) {
          if (i + j >= pointsCount)
            break;

          if (i % 2 == 0) {
            serie2.pointsData[i + j] = null;
          } else {
            serie1.pointsData[i + j] = null;
          }
          if (serie3 && j != 0 && j != $scope.subgroupSize - 1) {
            serie3.pointsData[i + j] = null;
          }
        }
      }
    }
  }
});
