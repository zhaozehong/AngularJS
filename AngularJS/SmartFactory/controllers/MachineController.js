'use strict';

app.controller("MachineController", function ($scope, $location, $routeParams) {
  var pulseData = {
    stacked: true,
    xAxisData: ["Mon.", "Tue.", "Wen.", "Thu.", "Fri.", "Sat.", "Sun."],
    dataArray: [
      { name: "Temperature", data: [18, 19.5, 21, 23, 22, 25, 35] },
      { name: "Humidity", data: [50, 57, 62, 65, 55, 60, 72] },
      { name: "Vibration", data: [15, 23, 20, 15, 19, 33, 41] },
      { name: "Pressure", data: [101.325, 110.5, 98.2, 103.1, 111, 104, 102.4] }
    ]
  };
  var machineData = [
    { name: "Idle", value: 335 },
    { name: "Busy", value: 310 },
    { name: "Exception", value: 234 },
    { name: "Offline", value: 135 }
  ];

  $scope.name = $routeParams.name;
  $scope.charttype = 'multiline';
  $scope.data = {
    gaugecar: {
      data: [
        {
          name: "Temperature",
          title: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 18,
            fontStyle: 'italic'
          },
          z: 1,
          min: 0,
          max: 40,
          radius: "40%",
          splitNumber: 8,
          axisLabel: {
            backgroundColor: 'auto',
            borderRadius: 2,
            color: '#eee',
            padding: 3,
            textShadowBlur: 2,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textShadowColor: '#222'
          },
          axisLine: {
            lineStyle: { width: 10 }
          },
          axisTick: {          // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          splitLine: {         // 分隔线
            length: 20,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          detail: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            formatter: function (value) {
              return value.toFixed(1)
            },
            fontWeight: 'bolder',
            borderRadius: 3,
            backgroundColor: '#444',
            borderColor: '#aaa',
            shadowBlur: 5,
            shadowColor: '#333',
            shadowOffsetX: 0,
            shadowOffsetY: 3,
            borderWidth: 2,
            textBorderColor: '#000',
            textBorderWidth: 2,
            textShadowBlur: 2,
            textShadowColor: '#fff',
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            fontFamily: 'Arial',
            width: 60,
            color: '#eee',
            rich: {}
          },
          data: [
            {
              name: "℃",
              value: function () {
                for (var i = 0; i < pulseData.dataArray.length; i++) {
                  if (pulseData.dataArray[i].name == "Temperature") {
                    var index = pulseData.dataArray[i].data.length - 1;
                    return pulseData.dataArray[i].data[index];
                  }
                }
              }()
            }]
        },
        {
          name: "Humidity",
          title: {
            offsetCenter: [0, '-15%'],       // x, y，单位px
          },
          min: 30,
          max: 80,
          center: ["20%", "55%"],
          radius: "30%",
          splitNumber: 5,
          endAngle: 45,
          axisTick: {          // 坐标轴小标记
            length: 12,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          splitLine: {         // 分隔线
            length: 20,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          pointer: {
            width: 5
          },
          detail: { show: false },
          data: [
            {
              name: "%RH",
              value: function () {
                for (var i = 0; i < pulseData.dataArray.length; i++) {
                  if (pulseData.dataArray[i].name == "Humidity") {
                    var index = pulseData.dataArray[i].data.length - 1;
                    return pulseData.dataArray[i].data[index];
                  }
                }
              }()
            }]
        },
        {
          name: "Vibration",
          title: { show: false },
          min: 0,
          max: 50,
          radius: "25%",
          center: ["77%", "50%"],
          splitNumber: 2,
          startAngle: 135,
          endAngle: 45,
          axisLabel: {
            formatter: function (v) {
              switch (v + '') {
                case "0": return "0";
                case "25": return "Virb.";
                case "50": return "50";
              }
            }
          },
          axisTick: {            // 坐标轴小标记
            splitNumber: 5,
            length: 10,        // 属性length控制线长
            lineStyle: {        // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          splitLine: {         // 分隔线
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          pointer: {
            width: 2
          },
          detail: { show: false },

          data: [
            {
              name: "virb.",
              value: function () {
                for (var i = 0; i < pulseData.dataArray.length; i++) {
                  if (pulseData.dataArray[i].name == "Vibration") {
                    var index = pulseData.dataArray[i].data.length - 1;
                    return pulseData.dataArray[i].data[index];
                  }
                }
              }()
            }]
        },
        {
          name: "Pressure",
          title: { show: false },
          min: 80,
          max: 120,
          center: ["77%", "50%"],
          radius: "25%",
          splitNumber: 2,
          startAngle: 315,
          endAngle: 225,
          axisLabel: {
            formatter: function (v) {
              switch (v + '') {
                case "80": return "80";
                case "100": return "atm";
                case "120": return "120";
              }
            }
          },
          splitLine: {         // 分隔线
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          pointer: {
            width: 2
          },
          detail: { show: false },
          data: [{
            name: "kPa",
            value: function () {
              for (var i = 0; i < pulseData.dataArray.length; i++) {
                if (pulseData.dataArray[i].name == "Pressure") {
                  var index = pulseData.dataArray[i].data.length - 1;
                  return pulseData.dataArray[i].data[index];
                }
              }
            }()
          }]
        },
      ]
    },
    pie: {
      //legend: function () {
      //  let serie = [];
      //  for (var i = 0; i < machineData.length; i++) {
      //    serie.push(machineData[i].name);
      //  }
      //  return serie;
      //}(),
      data: machineData
    },
    multiline: {
      legend: function () {
        let serie = [];
        for (var i = 0; i < pulseData.dataArray.length; i++) {
          serie.push(pulseData.dataArray[i].name);
        }
        return serie;
      }(),
      xAxisData: pulseData.xAxisData,
      data: function () {
        let serie = [];
        for (var i = 0; i < pulseData.dataArray.length; i++) {
          serie.push(pulseData.dataArray[i].data);
        }
        return serie;
      }()
    },
    bar3d: {}
  };
  $scope.imageClick = function () {
    $location.path("/image/" + $routeParams.name);
  }
});
