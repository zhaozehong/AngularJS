'user strict'

var sfchart = function () {
  let lineTypes = {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  };
  let symbolTypes = {
    circle: 'circle',
    rect: 'rect',
    roundRect: 'roundRect',
    triangle: 'triangle',
    diamond: 'diamond',
    pin: 'pin',
    arrow: 'arrow',

    none: 'none'
  };
  let symbolSizes = {
    small: 10,
    normal: 20,
    big: 30
  };
  let getEChartOption = function (charttype, data, dataKey) {
    let key = dataKey ? dataKey : charttype;
    if (!data.hasOwnProperty(key))
      return;

    let chartData = Helper.deepClone(data[key]);

    if (charttype == "line") {
      return getLineOption();
    }
    else if (charttype == "multiline") {
      return getMultiLineOption();
    }
    else if (charttype == "stackedarea") {
      return getStackedAreaOption();
    }
    else if (charttype == "bar") {
      return getBarOption();
    }
    else if (charttype == "pie") {
      return getPieOption();
    }
    else if (charttype == "radar") {
      return getRadarOption();
    }
    else if (charttype == "sunburst") {
      return getSunburstOption();
    }
    else if (charttype == "heatmap") {
      return getHeatmapOption();
    }
    else if (charttype == "gaugecar") {
      return getGaugeCarOption();
    }
    else if (charttype == "bar3d") {
      return get3dBarOption();
    }
    else if (charttype == "map2d") {
      return get2dMapOption();
    }
    else if (charttype == "map3d") {
      return get3dMapOption();
    }
    else if (charttype == "multitree") {
      return getMultiTreeOption();
    }
    else if (charttype == "candlestick") {
      return getCandlestickOption();
    }
    else if (charttype == "OHLC") {
      return getOHLCOption();
    }
    else if (charttype == "ring") {
      return getRingOption();
    }
    else if (charttype == "ringX") {
      return getRingXOption();
    }

    else if (charttype == "qdasIndValueChart") {
      return getQdasIndValueChartOption();
    }


    function getLineOption() {
      let legend = ["PH值", "溶解氧", "电导率", "温度值", "浊度值"];
      let item = ["8:45", "8:47", "8:49", "8:51", "8:53", "8:55", "8:57", "8:59"];
      let data = [
        ["7.95", "7.71", "7.16", "7.77", "7.99", "7.76", "7.91", "7.76"],
        ["8.42", "32.23", "33.44", "17.16", "7.08", "7.29", "7.18", "7.3"],
        ["257.85", "254.65", "253", "279.8", "206.6", "271.08", "286.24", "263.5"],
        ["25.75", "20.46", "21.05", "20.58", "20.7", "20.58", "20.45", "20.58"],
        ["8.08", "3.83", "2.79", "6.39", "7.75", "7.81", "7.58", "7.81"]
      ];

      return {
        // 提示框，鼠标悬浮交互时的信息提示
        //tooltip: {
        //  show: true,
        //  trigger: 'item'
        //},
        // 图例
        legend: {
          data: legend
        },
        // 横轴坐标轴
        xAxis: [{
          type: 'category',
          data: item
        }],
        // 纵轴坐标轴
        yAxis: [{
          type: 'value'
        }],
        // 数据内容数组
        series: function () {
          let serie = [];
          for (let i = 0; i < legend.length; i++) {
            let item = {
              name: legend[i],
              type: 'line',
              data: data[i]
            };
            serie.push(item);
          }
          return serie;
        }()
      };
    }
    function getMultiLineOption() {
      return {
        title: {
          text: 'Multi Line'
        },
        //tooltip: {
        //  trigger: 'axis'
        //},
        legend: {
          data: chartData.legend
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: chartData.xAxisData
        },
        yAxis: {
          type: "value"
        },

        series: function () {
          let serie = [];
          for (let i = 0; i < chartData.legend.length; i++) {
            let item = {
              name: chartData.legend[i],
              type: 'line',
              //stack: "总量",
              data: chartData.data[i]
            };
            serie.push(item);
          }
          return serie;
        }()
      };
    }
    function getStackedAreaOption() {
      let data = ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'];
      let seriesDatas = [
        { name: '邮件营销', label: {}, data: [120, 132, 101, 134, 90, 230, 210] },
        { name: '联盟广告', label: {}, data: [220, 182, 191, 234, 290, 330, 310] },
        { name: '视频广告', label: {}, data: [150, 232, 201, 154, 190, 330, 410] },
        { name: '直接访问', label: {}, data: [320, 332, 301, 334, 390, 330, 320] },
        {
          name: '搜索引擎',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
      ];

      return {
        title: {
          text: '堆叠区域图'
        },
        //tooltip: {
        //  trigger: 'axis',
        //  axisPointer: {
        //    type: 'cross',
        //    label: {
        //      backgroundColor: '#6a7985'
        //    }
        //  }
        //},
        legend: {
          data: data
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: function () {
          let serie = [];
          for (let i = 0; i < seriesDatas.length; i++) {
            let item = {
              name: seriesDatas[i].name,
              type: 'line',
              stack: '总量',
              label: seriesDatas[i].label,
              areaStyle: { normal: {} },
              data: seriesDatas[i].data
            };
            serie.push(item);
          }
          return serie;
        }()
      };
    }
    function getBarOption() {
      let data = [120, 200, 150, 80, 70, 110, 130];
      return {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: data,
          type: 'bar'
        }]
      };
    }
    function getPieOption() {
      return option = {
        //title: {
        //  text: 'Pie Chart',
        //  subtext: "not a real case",
        //  x: 'center'
        //},
        //tooltip: {
        //  trigger: 'item',
        //  formatter: "{a} <br/>{b} : {c} ({d}%)"
        //},
        //legend: {
        //  orient: 'horizontal',
        //  left: 'left',
        //  data: chartData.legend
        //},
        series: [
          {
            //name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: chartData.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
    }
    function getRadarOption() {
      return {
        title: {
          text: '多雷达图'
        },
        //tooltip: {
        //  trigger: 'axis'
        //},
        legend: {
          x: 'center',
          data: ['某软件', '某主食手机', '某水果手机', '降水量', '蒸发量']
        },
        radar: [
          {
            indicator: [
              { text: '品牌', max: 100 },
              { text: '内容', max: 100 },
              { text: '可用性', max: 100 },
              { text: '功能', max: 100 }
            ],
            center: ['25%', '40%'],
            radius: 80
          },
          {
            indicator: [
              { text: '外观', max: 100 },
              { text: '拍照', max: 100 },
              { text: '系统', max: 100 },
              { text: '性能', max: 100 },
              { text: '屏幕', max: 100 }
            ],
            radius: 80,
            center: ['50%', '60%'],
          },
          {
            indicator: (function () {
              let res = [];
              for (let i = 1; i <= 12; i++) {
                res.push({ text: i + '月', max: 100 });
              }
              return res;
            })(),
            center: ['75%', '40%'],
            radius: 80
          }
        ],
        series: [
          {
            type: 'radar',
            //tooltip: {
            //  trigger: 'item'
            //},
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [
              {
                value: [60, 73, 85, 40],
                name: '某软件'
              }
            ]
          },
          {
            type: 'radar',
            radarIndex: 1,
            data: [
              {
                value: [85, 90, 90, 95, 95],
                name: '某主食手机'
              },
              {
                value: [95, 80, 95, 90, 93],
                name: '某水果手机'
              }
            ]
          },
          {
            type: 'radar',
            radarIndex: 2,
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [
              {
                name: '降水量',
                value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
              },
              {
                name: '蒸发量',
                value: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
              }
            ]
          }
        ]
      };
    }
    function getSunburstOption() {
      let data = [{
        name: 'Grandpa',
        children: [{
          name: 'Uncle Leo',
          value: 15,
          children: [{
            name: 'Cousin Jack',
            value: 2
          }, {
            name: 'Cousin Mary',
            value: 5,
            children: [{
              name: 'Jackson',
              value: 2
            }]
          }, {
            name: 'Cousin Ben',
            value: 4
          }]
        }, {
          name: 'Aunt Jane',
          children: [{
            name: 'Cousin Kate',
            value: 4
          }]
        }, {
          name: 'Father',
          value: 10,
          children: [{
            name: 'Me',
            value: 5,
            itemStyle: {
              color: 'red'
            }
          }, {
            name: 'Brother Peter',
            value: 1
          }]
        }]
      }, {
        name: 'Mike',
        children: [{
          name: 'Uncle Dan',
          children: [{
            name: 'Cousin Lucy',
            value: 3
          }, {
            name: 'Cousin Luck',
            value: 4,
            children: [{
              name: 'Nephew',
              value: 2
            }]
          }]
        }]
      }, {
        name: 'Nancy',
        children: [{
          name: 'Uncle Nike',
          children: [{
            name: 'Cousin Betty',
            value: 1
          }, {
            name: 'Cousin Jenny',
            value: 2
          }]
        }]
      }];

      return {
        visualMap: {
          type: 'continuous',
          min: 0,
          max: 10,
          inRange: {
            color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
          }
        },
        series: {
          type: 'sunburst',
          data: data,
          radius: [0, '90%'],
          label: {
            rotate: 'radial'
          }
        }
      };
    }
    function getHeatmapOption() {
      let hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a', '10a', '11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
      let days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

      let data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];

      data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
      });

      return {
        //tooltip: {
        //  position: 'top'
        //},
        animation: false,
        grid: {
          height: '50%',
          y: '10%'
        },
        xAxis: {
          type: 'category',
          data: hours,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: days,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%'
        },
        series: [{
          name: 'Punch Card',
          type: 'heatmap',
          data: data,
          label: {
            normal: {
              show: true
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
    }
    function getGaugeCarOption() {
      return {
        //tooltip: {
        //  formatter: "{a} <br/>{c} {b}"
        //},
        toolbox: {
          show: false,
          feature: {
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: function () {
          let serie = [];
          for (let i = 0; i < chartData.data.length; i++) {
            let item = {
              type: "gauge",
              name: chartData.data[i].name,
              min: chartData.data[i].min,
              max: chartData.data[i].max,
              splitNumber: chartData.data[i].splitNumber,
              radius: chartData.data[i].radius,
              data: chartData.data[i].data,
              axisLine: {
                lineStyle: { width: 8 }
              },
              axisTick: { show: false },
            };
            if (chartData.data[i].z) { item.z = chartData.data[i].z; }
            if (chartData.data[i].title) { item.title = chartData.data[i].title; }
            if (chartData.data[i].center) { item.center = chartData.data[i].center; }
            if (chartData.data[i].startAngle) { item.startAngle = chartData.data[i].startAngle; }
            if (chartData.data[i].endAngle) { item.endAngle = chartData.data[i].endAngle; }
            if (chartData.data[i].axisLabel) { item.axisLabel = chartData.data[i].axisLabel; }
            if (chartData.data[i].axisLine) { item.axisLine = chartData.data[i].axisLine; }
            if (chartData.data[i].axisTick) { item.axisTick = chartData.data[i].axisTick; }
            if (chartData.data[i].splitLine) { item.splitLine = chartData.data[i].splitLine; }
            if (chartData.data[i].pointer) { item.pointer = chartData.data[i].pointer; }
            if (chartData.data[i].detail) { item.detail = chartData.data[i].detail; }

            serie.push(item);
          }
          return serie;
        }()
      };

      setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
        option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
        option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
        myChart.setOption(option, true);
      }, 2000);
    }
    function get3dBarOption() {

      let hours = [
        '12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a', '10a', '11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'
      ];
      let days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
      let data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];
      return {
        //tooltip: {},
        visualMap: {
          max: 20,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
        },
        xAxis3D: {
          type: 'category',
          data: hours
        },
        yAxis3D: {
          type: 'category',
          data: days
        },
        zAxis3D: {
          type: 'value'
        },
        grid3D: {
          boxWidth: 200,
          boxDepth: 80,
          viewControl: {
            // projection: 'orthographic'
          },
          light: {
            main: {
              intensity: 1.2,
              shadow: true
            },
            ambient: {
              intensity: 0.3
            }
          }
        },
        series: [{
          type: 'bar3D',
          data: data.map(function (item) {
            return {
              value: [item[1], item[0], item[2]],
            }
          }),
          shading: 'lambert',

          label: {
            textStyle: {
              fontSize: 16,
              borderWidth: 1
            }
          },

          emphasis: {
            label: {
              textStyle: {
                fontSize: 20,
                color: '#900'
              }
            },
            itemStyle: {
              color: '#900'
            }
          }
        }]
      };
    }
    function get2dMapOption() {
      let data = [
        { name: '海门', value: 9 },
        { name: '鄂尔多斯', value: 12 },
        { name: '招远', value: 12 },
        { name: '舟山', value: 12 },
        { name: '齐齐哈尔', value: 14 },
        { name: '盐城', value: 15 },
        { name: '赤峰', value: 16 },
        { name: '青岛', value: 18 },
        { name: '乳山', value: 18 },
        { name: '金昌', value: 19 },
        { name: '泉州', value: 21 },
        { name: '南通', value: 23 },
        { name: '拉萨', value: 24 },
        { name: '云浮', value: 24 },
        { name: '上海', value: 25 },
        { name: '攀枝花', value: 25 },
        { name: '承德', value: 25 },
        { name: '汕尾', value: 26 },
        { name: '丹东', value: 27 },
        { name: '瓦房店', value: 30 },
        { name: '延安', value: 38 },
        { name: '咸阳', value: 43 },
        { name: '南昌', value: 54 },
        { name: '柳州', value: 54 },
        { name: '三亚', value: 54 },
        { name: '泸州', value: 57 },
        { name: '克拉玛依', value: 72 }
      ];
      let geoCoordMap = {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '招远': [120.38, 37.35],
        '舟山': [122.207216, 29.985295],
        '齐齐哈尔': [123.97, 47.33],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043, 38.520089],
        '泉州': [118.58, 24.93],
        '莱西': [120.53, 36.86],
        '日照': [119.46, 35.42],
        '胶南': [119.97, 35.88],
        '南通': [121.05, 32.08],
        '拉萨': [91.11, 29.97],
        '云浮': [112.02, 22.93],
        '梅州': [116.1, 24.55],
        '文登': [122.05, 37.2],
        '上海': [121.48, 31.22],
        '攀枝花': [101.718637, 26.582347],
        '威海': [122.1, 37.5],
        '承德': [117.93, 40.97],
        '厦门': [118.1, 24.46],
        '汕尾': [115.375279, 22.786211],
        '潮州': [116.63, 23.68],
        '丹东': [124.37, 40.13],
        '太仓': [121.1, 31.45],
        '曲靖': [103.79, 25.51],
        '烟台': [121.39, 37.52],
        '福州': [119.3, 26.08],
        '瓦房店': [121.979603, 39.627114],
        '即墨': [120.45, 36.38],
        '抚顺': [123.97, 41.97],
        '玉溪': [102.52, 24.35],
        '张家口': [114.87, 40.82],
        '阳泉': [113.57, 37.85],
        '莱州': [119.942327, 37.177017],
        '湖州': [120.1, 30.86],
        '汕头': [116.69, 23.39],
        '昆山': [120.95, 31.39],
        '宁波': [121.56, 29.86],
        '湛江': [110.359377, 21.270708],
        '揭阳': [116.35, 23.55],
        '荣成': [122.41, 37.16],
        '连云港': [119.16, 34.59],
        '葫芦岛': [120.836932, 40.711052],
        '常熟': [120.74, 31.64],
        '东莞': [113.75, 23.04],
        '河源': [114.68, 23.73],
        '淮安': [119.15, 33.5],
        '泰州': [119.9, 32.49],
        '南宁': [108.33, 22.84],
        '营口': [122.18, 40.65],
        '惠州': [114.4, 23.09],
        '江阴': [120.26, 31.91],
        '蓬莱': [120.75, 37.8],
        '韶关': [113.62, 24.84],
        '嘉峪关': [98.289152, 39.77313],
        '广州': [113.23, 23.16],
        '延安': [109.47, 36.6],
        '太原': [112.53, 37.87],
        '清远': [113.01, 23.7],
        '中山': [113.38, 22.52],
        '昆明': [102.73, 25.04],
        '寿光': [118.73, 36.86],
        '盘锦': [122.070714, 41.119997],
        '长治': [113.08, 36.18],
        '深圳': [114.07, 22.62],
        '珠海': [113.52, 22.3],
        '宿迁': [118.3, 33.96],
        '咸阳': [108.72, 34.36],
        '铜川': [109.11, 35.09],
        '平度': [119.97, 36.77],
        '佛山': [113.11, 23.05],
        '海口': [110.35, 20.02],
        '江门': [113.06, 22.61],
        '章丘': [117.53, 36.72],
        '肇庆': [112.44, 23.05],
        '大连': [121.62, 38.92],
        '临汾': [111.5, 36.08],
        '吴江': [120.63, 31.16],
        '石嘴山': [106.39, 39.04],
        '沈阳': [123.38, 41.8],
        '苏州': [120.62, 31.32],
        '茂名': [110.88, 21.68],
        '嘉兴': [120.76, 30.77],
        '长春': [125.35, 43.88],
        '胶州': [120.03336, 36.264622],
        '银川': [106.27, 38.47],
        '张家港': [120.555821, 31.875428],
        '三门峡': [111.19, 34.76],
        '锦州': [121.15, 41.13],
        '南昌': [115.89, 28.68],
        '柳州': [109.4, 24.33],
        '三亚': [109.511909, 18.252847],
        '自贡': [104.778442, 29.33903],
        '吉林': [126.57, 43.87],
        '阳江': [111.95, 21.85],
        '泸州': [105.39, 28.91],
        '西宁': [101.74, 36.56],
        '宜宾': [104.56, 29.77],
        '呼和浩特': [111.65, 40.82],
        '成都': [104.06, 30.67],
        '大同': [113.3, 40.12],
        '镇江': [119.44, 32.2],
        '桂林': [110.28, 25.29],
        '张家界': [110.479191, 29.117096],
        '宜兴': [119.82, 31.36],
        '北海': [109.12, 21.49],
        '西安': [108.95, 34.27],
        '金坛': [119.56, 31.74],
        '东营': [118.49, 37.46],
        '牡丹江': [129.58, 44.6],
        '遵义': [106.9, 27.7],
        '绍兴': [120.58, 30.01],
        '扬州': [119.42, 32.39],
        '常州': [119.95, 31.79],
        '潍坊': [119.1, 36.62],
        '重庆': [106.54, 29.59],
        '台州': [121.420757, 28.656386],
        '南京': [118.78, 32.04],
        '滨州': [118.03, 37.36],
        '贵阳': [106.71, 26.57],
        '无锡': [120.29, 31.59],
        '本溪': [123.73, 41.3],
        '克拉玛依': [84.77, 45.59],
        '渭南': [109.5, 34.52],
        '马鞍山': [118.48, 31.56],
        '宝鸡': [107.15, 34.38],
        '焦作': [113.21, 35.24],
        '句容': [119.16, 31.95],
        '北京': [116.46, 39.92],
        '徐州': [117.2, 34.26],
        '衡水': [115.72, 37.72],
        '包头': [110, 40.58],
        '绵阳': [104.73, 31.48],
        '乌鲁木齐': [87.68, 43.77],
        '枣庄': [117.57, 34.86],
        '杭州': [120.19, 30.26],
        '淄博': [118.05, 36.78],
        '鞍山': [122.85, 41.12],
        '溧阳': [119.48, 31.43],
        '库尔勒': [86.06, 41.68],
        '安阳': [114.35, 36.1],
        '开封': [114.35, 34.79],
        '济南': [117, 36.65],
        '德阳': [104.37, 31.13],
        '温州': [120.65, 28.01],
        '九江': [115.97, 29.71],
        '邯郸': [114.47, 36.6],
        '临安': [119.72, 30.23],
        '兰州': [103.73, 36.03],
        '沧州': [116.83, 38.33],
        '临沂': [118.35, 35.05],
        '南充': [106.110698, 30.837793],
        '天津': [117.2, 39.13],
        '富阳': [119.95, 30.07],
        '泰安': [117.13, 36.18],
        '诸暨': [120.23, 29.71],
        '郑州': [113.65, 34.76],
        '哈尔滨': [126.63, 45.75],
        '聊城': [115.97, 36.45],
        '芜湖': [118.38, 31.33],
        '唐山': [118.02, 39.63],
        '平顶山': [113.29, 33.75],
        '邢台': [114.48, 37.05],
        '德州': [116.29, 37.45],
        '济宁': [116.59, 35.38],
        '荆州': [112.239741, 30.335165],
        '宜昌': [111.3, 30.7],
        '义乌': [120.06, 29.32],
        '丽水': [119.92, 28.45],
        '洛阳': [112.44, 34.7],
        '秦皇岛': [119.57, 39.95],
        '株洲': [113.16, 27.83],
        '石家庄': [114.48, 38.03],
        '莱芜': [117.67, 36.19],
        '常德': [111.69, 29.05],
        '保定': [115.48, 38.85],
        '湘潭': [112.91, 27.87],
        '金华': [119.64, 29.12],
        '岳阳': [113.09, 29.37],
        '长沙': [113, 28.21],
        '衢州': [118.88, 28.97],
        '廊坊': [116.7, 39.53],
        '菏泽': [115.480656, 35.23375],
        '合肥': [117.27, 31.86],
        '武汉': [114.31, 30.52],
        '大庆': [125.03, 46.58]
      };

      function convertData(data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      function randomValue() {
        return Math.round(Math.random() * 1000);
      }

      return {
        //tooltip: {},
        visualMap: {
          min: 0,
          max: 1500,
          left: 'left',
          top: 'bottom',
          text: ['High', 'Low'],
          seriesIndex: [1],
          inRange: {
            color: ['#e0ffff', '#006edd']
          },
          calculable: true
        },
        geo: {
          map: 'china',
          roam: true,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 20,
            symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            symbolRotate: 35,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#F06C00'
              }
            }
          },
          {
            name: 'categoryA',
            type: 'map',
            geoIndex: 0,
            // tooltip: {show: false},
            data: [
              { name: '北京', value: randomValue() },
              { name: '天津', value: randomValue() },
              { name: '上海', value: randomValue() },
              { name: '重庆', value: randomValue() },
              { name: '河北', value: randomValue() },
              { name: '河南', value: randomValue() },
              { name: '云南', value: randomValue() },
              { name: '辽宁', value: randomValue() },
              { name: '黑龙江', value: randomValue() },
              { name: '湖南', value: randomValue() },
              { name: '安徽', value: randomValue() },
              { name: '山东', value: randomValue() },
              { name: '新疆', value: randomValue() },
              { name: '江苏', value: randomValue() },
              { name: '浙江', value: randomValue() },
              { name: '江西', value: randomValue() },
              { name: '湖北', value: randomValue() },
              { name: '广西', value: randomValue() },
              { name: '甘肃', value: randomValue() },
              { name: '山西', value: randomValue() },
              { name: '内蒙古', value: randomValue() },
              { name: '陕西', value: randomValue() },
              { name: '吉林', value: randomValue() },
              { name: '福建', value: randomValue() },
              { name: '贵州', value: randomValue() },
              { name: '广东', value: randomValue() },
              { name: '青海', value: randomValue() },
              { name: '西藏', value: randomValue() },
              { name: '四川', value: randomValue() },
              { name: '宁夏', value: randomValue() },
              { name: '海南', value: randomValue() },
              { name: '台湾', value: randomValue() },
              { name: '香港', value: randomValue() },
              { name: '澳门', value: randomValue() }
            ]
          }
        ]
      };
    }
    function get3dMapOption() {
      let geoCoordMap = {
        "海门": [121.15, 31.89],
        "鄂尔多斯": [109.781327, 39.608266],
        "招远": [120.38, 37.35],
        "舟山": [122.207216, 29.985295],
        "齐齐哈尔": [123.97, 47.33],
        "盐城": [120.13, 33.38],
        "赤峰": [118.87, 42.28],
        "青岛": [120.33, 36.07],
        "乳山": [121.52, 36.89],
        "金昌": [102.188043, 38.520089],
        "泉州": [118.58, 24.93],
        "莱西": [120.53, 36.86],
        "日照": [119.46, 35.42],
        "胶南": [119.97, 35.88],
        "南通": [121.05, 32.08],
        "拉萨": [91.11, 29.97],
        "云浮": [112.02, 22.93],
        "梅州": [116.1, 24.55],
        "文登": [122.05, 37.2],
        "上海": [121.48, 31.22],
        "攀枝花": [101.718637, 26.582347],
        "威海": [122.1, 37.5],
        "承德": [117.93, 40.97],
        "厦门": [118.1, 24.46],
        "汕尾": [115.375279, 22.786211],
        "潮州": [116.63, 23.68],
        "丹东": [124.37, 40.13],
        "太仓": [121.1, 31.45],
        "曲靖": [103.79, 25.51],
        "烟台": [121.39, 37.52],
        "福州": [119.3, 26.08],
        "瓦房店": [121.979603, 39.627114],
        "即墨": [120.45, 36.38],
        "抚顺": [123.97, 41.97],
        "玉溪": [102.52, 24.35],
        "张家口": [114.87, 40.82],
        "阳泉": [113.57, 37.85],
        "莱州": [119.942327, 37.177017],
        "湖州": [120.1, 30.86],
        "汕头": [116.69, 23.39],
        "昆山": [120.95, 31.39],
        "宁波": [121.56, 29.86],
        "湛江": [110.359377, 21.270708],
        "揭阳": [116.35, 23.55],
        "荣成": [122.41, 37.16],
        "连云港": [119.16, 34.59],
        "葫芦岛": [120.836932, 40.711052],
        "常熟": [120.74, 31.64],
        "东莞": [113.75, 23.04],
        "河源": [114.68, 23.73],
        "淮安": [119.15, 33.5],
        "泰州": [119.9, 32.49],
        "南宁": [108.33, 22.84],
        "营口": [122.18, 40.65],
        "惠州": [114.4, 23.09],
        "江阴": [120.26, 31.91],
        "蓬莱": [120.75, 37.8],
        "韶关": [113.62, 24.84],
        "嘉峪关": [98.289152, 39.77313],
        "广州": [113.23, 23.16],
        "延安": [109.47, 36.6],
        "太原": [112.53, 37.87],
        "清远": [113.01, 23.7],
        "中山": [113.38, 22.52],
        "昆明": [102.73, 25.04],
        "寿光": [118.73, 36.86],
        "盘锦": [122.070714, 41.119997],
        "长治": [113.08, 36.18],
        "深圳": [114.07, 22.62],
        "珠海": [113.52, 22.3],
        "宿迁": [118.3, 33.96],
        "咸阳": [108.72, 34.36],
        "铜川": [109.11, 35.09],
        "平度": [119.97, 36.77],
        "佛山": [113.11, 23.05],
        "海口": [110.35, 20.02],
        "江门": [113.06, 22.61],
        "章丘": [117.53, 36.72],
        "肇庆": [112.44, 23.05],
        "大连": [121.62, 38.92],
        "临汾": [111.5, 36.08],
        "吴江": [120.63, 31.16],
        "石嘴山": [106.39, 39.04],
        "沈阳": [123.38, 41.8],
        "苏州": [120.62, 31.32],
        "茂名": [110.88, 21.68],
        "嘉兴": [120.76, 30.77],
        "长春": [125.35, 43.88],
        "胶州": [120.03336, 36.264622],
        "银川": [106.27, 38.47],
        "张家港": [120.555821, 31.875428],
        "三门峡": [111.19, 34.76],
        "锦州": [121.15, 41.13],
        "南昌": [115.89, 28.68],
        "柳州": [109.4, 24.33],
        "三亚": [109.511909, 18.252847],
        "自贡": [104.778442, 29.33903],
        "吉林": [126.57, 43.87],
        "阳江": [111.95, 21.85],
        "泸州": [105.39, 28.91],
        "西宁": [101.74, 36.56],
        "宜宾": [104.56, 29.77],
        "呼和浩特": [111.65, 40.82],
        "成都": [104.06, 30.67],
        "大同": [113.3, 40.12],
        "镇江": [119.44, 32.2],
        "桂林": [110.28, 25.29],
        "张家界": [110.479191, 29.117096],
        "宜兴": [119.82, 31.36],
        "北海": [109.12, 21.49],
        "西安": [108.95, 34.27],
        "金坛": [119.56, 31.74],
        "东营": [118.49, 37.46],
        "牡丹江": [129.58, 44.6],
        "遵义": [106.9, 27.7],
        "绍兴": [120.58, 30.01],
        "扬州": [119.42, 32.39],
        "常州": [119.95, 31.79],
        "潍坊": [119.1, 36.62],
        "重庆": [106.54, 29.59],
        "台州": [121.420757, 28.656386],
        "南京": [118.78, 32.04],
        "滨州": [118.03, 37.36],
        "贵阳": [106.71, 26.57],
        "无锡": [120.29, 31.59],
        "本溪": [123.73, 41.3],
        "克拉玛依": [84.77, 45.59],
        "渭南": [109.5, 34.52],
        "马鞍山": [118.48, 31.56],
        "宝鸡": [107.15, 34.38],
        "焦作": [113.21, 35.24],
        "句容": [119.16, 31.95],
        "北京": [116.46, 39.92],
        "徐州": [117.2, 34.26],
        "衡水": [115.72, 37.72],
        "包头": [110, 40.58],
        "绵阳": [104.73, 31.48],
        "乌鲁木齐": [87.68, 43.77],
        "枣庄": [117.57, 34.86],
        "杭州": [120.19, 30.26],
        "淄博": [118.05, 36.78],
        "鞍山": [122.85, 41.12],
        "溧阳": [119.48, 31.43],
        "库尔勒": [86.06, 41.68],
        "安阳": [114.35, 36.1],
        "开封": [114.35, 34.79],
        "济南": [117, 36.65],
        "德阳": [104.37, 31.13],
        "温州": [120.65, 28.01],
        "九江": [115.97, 29.71],
        "邯郸": [114.47, 36.6],
        "临安": [119.72, 30.23],
        "兰州": [103.73, 36.03],
        "沧州": [116.83, 38.33],
        "临沂": [118.35, 35.05],
        "南充": [106.110698, 30.837793],
        "天津": [117.2, 39.13],
        "富阳": [119.95, 30.07],
        "泰安": [117.13, 36.18],
        "诸暨": [120.23, 29.71],
        "郑州": [113.65, 34.76],
        "哈尔滨": [126.63, 45.75],
        "聊城": [115.97, 36.45],
        "芜湖": [118.38, 31.33],
        "唐山": [118.02, 39.63],
        "平顶山": [113.29, 33.75],
        "邢台": [114.48, 37.05],
        "德州": [116.29, 37.45],
        "济宁": [116.59, 35.38],
        "荆州": [112.239741, 30.335165],
        "宜昌": [111.3, 30.7],
        "义乌": [120.06, 29.32],
        "丽水": [119.92, 28.45],
        "洛阳": [112.44, 34.7],
        "秦皇岛": [119.57, 39.95],
        "株洲": [113.16, 27.83],
        "石家庄": [114.48, 38.03],
        "莱芜": [117.67, 36.19],
        "常德": [111.69, 29.05],
        "保定": [115.48, 38.85],
        "湘潭": [112.91, 27.87],
        "金华": [119.64, 29.12],
        "岳阳": [113.09, 29.37],
        "长沙": [113, 28.21],
        "衢州": [118.88, 28.97],
        "廊坊": [116.7, 39.53],
        "菏泽": [115.480656, 35.23375],
        "合肥": [117.27, 31.86],
        "武汉": [114.31, 30.52],
        "大庆": [125.03, 46.58]
      };

      let alirl = [[[121.15, 31.89], [109.781327, 39.608266]],
      [[120.38, 37.35], [122.207216, 29.985295]],
      [[123.97, 47.33], [120.13, 33.38]],
      [[118.87, 42.28], [120.33, 36.07]],
      [[121.52, 36.89], [117.93, 40.97]],
      [[102.188043, 38.520089], [122.1, 37.5]],
      [[118.58, 24.93], [101.718637, 26.582347]],
      [[120.53, 36.86], [121.48, 31.22]],
      [[119.46, 35.42], [122.05, 37.2]],
      [[119.97, 35.88], [116.1, 24.55]],
      [[121.05, 32.08], [112.02, 22.93]],
      [[91.11, 29.97], [118.1, 24.46]]
      ]
      let convertData = function (data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        // console.log(res)
        return res;
      };

      return {
        title: {
          text: '测试bar3D、scatter3D、geo3D',
          x: 'left',
          top: "10",
          textStyle: {
            color: '#000',
            fontSize: 14
          }
        },
        //tooltip: {
        //  show: true,
        //  // formatter:(params)=>{
        //  //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
        //  //   return data;
        //  // },
        //},
        visualMap: [{
          type: 'continuous',
          seriesIndex: 0,
          text: ['bar3D'],
          calculable: true,
          max: 300,
          inRange: {
            color: ['#87aa66', '#eba438', '#d94d4c']
          }
        }, {
          type: 'continuous',
          seriesIndex: 1,
          text: ['scatter3D'],
          left: 'right',
          max: 100,
          calculable: true,
          inRange: {
            color: ['#000', 'blue', 'purple']
          }
        }],
        geo3D: {
          map: 'china',
          roam: true,
          itemStyle: {
            areaColor: '#1d5e98',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
          },
          label: {
            show: true,
            textStyle: {
              color: '#000', //地图初始化区域字体颜色
              fontSize: 8,
              opacity: 1,
              backgroundColor: 'rgba(0,23,11,0)'
            },
          },
          emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 3,
                backgroundColor: 'rgba(0,23,11,0)'
              }
            }
          },
          //shading: 'lambert',
          light: { //光照阴影
            main: {
              color: '#fff', //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10

            },
            ambient: {
              intensity: 0.3
            }
          }
        },
        series: [
          //柱状图
          {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 1, //柱子粗细
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
              show: false,
              formatter: '{b}'
            },
            data: convertData([{
              name: "海门",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "鄂尔多斯",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "招远",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "舟山",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "齐齐哈尔",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "盐城",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "赤峰",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "青岛",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "乳山",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "金昌",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "泉州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "莱西",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "日照",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "胶南",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "南通",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "拉萨",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "云浮",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "梅州",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "文登",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "上海",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "攀枝花",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "威海",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "承德",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "厦门",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "汕尾",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "潮州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "丹东",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "太仓",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "曲靖",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "烟台",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "福州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "瓦房店",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "即墨",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "抚顺",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "玉溪",
              value: (Math.random() * 200).toFixed(2)
            },


            {
              name: "宁波",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "湛江",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "揭阳",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "荣成",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "连云港",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "葫芦岛",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "常熟",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "东莞",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "河源",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "淮安",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "泰州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "南宁",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "营口",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "惠州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "江阴",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "蓬莱",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "韶关",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "嘉峪关",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "广州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "延安",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "太原",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "清远",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "中山",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "昆明",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "寿光",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "盘锦",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "长治",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "深圳",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "珠海",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "宿迁",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "咸阳",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "铜川",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "平度",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "佛山",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "海口",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "江门",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "章丘",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "肇庆",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "大连",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "临汾",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "吴江",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "石嘴山",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "沈阳",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "苏州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "茂名",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "嘉兴",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "长春",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "胶州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "银川",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "张家港",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "三门峡",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "锦州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "南昌",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "柳州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "三亚",
              value: (Math.random() * 300).toFixed(2)
            }, {
              name: "自贡",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "吉林",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "阳江",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "泸州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "西宁",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "宜宾",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "呼和浩特",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "成都",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "大同",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "镇江",
              value: (Math.random() * 100).toFixed(2)
            }, {
              name: "桂林",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "张家界",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "宜兴",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "北海",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "西安",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "金坛",
              value: (Math.random() * 200).toFixed(2)
            },

            {
              name: "包头",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "绵阳",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "乌鲁木齐",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "枣庄",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "杭州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "淄博",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "鞍山",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "溧阳",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "库尔勒",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "安阳",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "开封",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "济南",
              value: (Math.random() * 100).toFixed(2)
            }, {
              name: "德阳",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "温州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "九江",
              value: (Math.random() * 100).toFixed(2)
            }, {
              name: "邯郸",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "临安",
              value: (Math.random() * 100).toFixed(2)
            }, {
              name: "兰州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "沧州",
              value: (Math.random() * 200).toFixed(2)
            },

            {
              name: "秦皇岛",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "株洲",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "石家庄",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "莱芜",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "常德",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "保定",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "湘潭",
              value: (Math.random() * 100).toFixed(2)
            }, {
              name: "金华",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "岳阳",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "长沙",
              value: (Math.random() * 100).toFixed(2)
            }, {
              name: "衢州",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "廊坊",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "菏泽",
              value: (Math.random() * 100).toFixed(2)
            }, {
              name: "合肥",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "武汉",
              value: (Math.random() * 200).toFixed(2)
            }, {
              name: "大庆",
              value: (Math.random() * 200).toFixed(2)
            }
            ]),
          },


          {
            name: 'scatter3D',
            type: "scatter3D",
            coordinateSystem: 'geo3D',
            symbol: symbolTypes.pin,
            symbolSize: 30,
            opacity: 1,
            label: {
              show: false,
              formatter: '{b}'
            },
            itemStyle: {
              borderWidth: 0.5,
              borderColor: '#fff'
            },
            data: convertData([{
              name: "阳泉",
              value: ((Math.random() * 100) + 50).toFixed(2)
            }, {
              name: "莱州",
              value: ((Math.random() * 100) + 50).toFixed(2)
            }, {
              name: "湖州",
              value: ((Math.random() * 100) + 50).toFixed(2)
            }, {
              name: "汕头",
              value: ((Math.random() * 100) + 50).toFixed(2)
            }, {
              name: "昆山",
              value: ((Math.random() * 100) + 50).toFixed(2)
            }, {
              name: "张家口",
              value: ((Math.random() * 100) + 50).toFixed(2)
            }])
          },


          //画线

          {
            type: 'lines3D',

            coordinateSystem: 'geo3D',

            effect: {
              show: true,
              trailWidth: 1,
              trailOpacity: 0.5,
              trailLength: 0.2,
              constantSpeed: 5
            },

            blendMode: 'lighter',

            lineStyle: {
              width: 0.2,
              opacity: 0.05
            },

            data: alirl
          }
        ]
      };
    }
    function getMultiTreeOption() {
      return {
        legend: {
          top: '2%',
          left: '3%',
          orient: 'vertical',
          data: [
            {
              name: 'tree',
              icon: 'rectangle'
            }],
          borderColor: '#c23531'
        },
        series: [
          {
            name: 'tree',
            type: 'tree',
            data: [chartData],

            top: '20%',
            left: '20%',
            bottom: '20%',
            right: '20%',

            symbolSize: 7,

            label: {
              normal: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
              }
            },

            leaves: {
              label: {
                normal: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left'
                }
              }
            },

            // expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      };
    }
    function getCandlestickOption() {
      let upColor = '#ec0000';
      let upBorderColor = '#8A0000';
      let downColor = '#00da3c';
      let downBorderColor = '#008F28';

      let dataCount = 2e4;
      let data = generateOHLC(dataCount);

      return {
        dataset: {
          source: data
        },
        title: {
          text: 'Data Amount: ' + echarts.format.addCommas(dataCount)
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          extraCssText: 'width:160px;height:150px;'
        },
        //toolbox: {
        //  feature: {
        //    dataZoom: {
        //      yAxisIndex: false
        //    },
        //  }
        //},
        grid: [
          {
            left: '10%',
            right: '10%',
            bottom: 200
          },
          {
            left: '10%',
            right: '10%',
            height: 80,
            bottom: 80
          }
        ],
        xAxis: [
          {
            type: 'category',
            scale: true,
            boundaryGap: false,
            // inverse: true,
            axisLine: { onZero: false },
            splitLine: { show: false },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
          },
          {
            type: 'category',
            gridIndex: 1,
            scale: true,
            boundaryGap: false,
            axisLine: { onZero: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
          }
        ],
        yAxis: [
          {
            scale: true,
            splitArea: {
              show: true
            }
          },
          {
            scale: true,
            gridIndex: 1,
            splitNumber: 2,
            axisLabel: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false }
          }
        ],
        dataZoom: [
          {
            type: 'inside',
            xAxisIndex: [0, 1],
            start: 10,
            end: 100
          },
          {
            show: true,
            xAxisIndex: [0, 1],
            type: 'slider',
            bottom: 10,
            start: 10,
            end: 100,
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '105%'
          }
        ],
        visualMap: {
          show: false,
          seriesIndex: 1,
          dimension: 6,
          pieces: [{
            value: 1,
            color: upColor
          }, {
            value: -1,
            color: downColor
          }]
        },
        series: [
          {
            type: 'candlestick',
            itemStyle: {
              color: upColor,
              color0: downColor,
              borderColor: upBorderColor,
              borderColor0: downBorderColor
            },
            encode: {
              x: 0,
              y: [1, 4, 3, 2]
            }
          },
          {
            name: 'Volumn',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              color: '#7fbe9e'
            },
            large: true,
            encode: {
              x: 0,
              y: 5
            }
          }
        ]
      };

      function generateOHLC(count) {
        let data = [];

        let xValue = +new Date(2011, 0, 1);
        let minute = 60 * 1000;
        let baseValue = Math.random() * 12000;
        let boxVals = new Array(4);
        let dayRange = 12;

        for (let i = 0; i < count; i++) {
          baseValue = baseValue + Math.random() * 20 - 10;

          for (let j = 0; j < 4; j++) {
            boxVals[j] = (Math.random() - 0.5) * dayRange + baseValue;
          }
          boxVals.sort();

          let idxRandom = Math.random();
          let openIdx = Math.round(Math.random() * 3);
          let closeIdx = Math.round(Math.random() * 2);
          if (closeIdx === openIdx) {
            closeIdx++;
          }
          let volumn = boxVals[3] * (1000 + Math.random() * 500);

          // ['open', 'close', 'lowest', 'highest', 'volumn']
          // [1, 4, 3, 2]
          data[i] = [
            echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', xValue += minute),
            +boxVals[openIdx].toFixed(2), // open
            +boxVals[3].toFixed(2), // highest
            +boxVals[0].toFixed(2), // lowest
            +boxVals[closeIdx].toFixed(2),  // close
            volumn.toFixed(0),
            getSign(data, i, +boxVals[openIdx], +boxVals[closeIdx], 4) // sign
          ];
        }

        return data;

        function getSign(data, dataIndex, openVal, closeVal, closeDimIdx) {
          let sign;
          if (openVal > closeVal) {
            sign = -1;
          }
          else if (openVal < closeVal) {
            sign = 1;
          }
          else {
            sign = dataIndex > 0
              // If close === open, compare with close of last record
              ? (data[dataIndex - 1][closeDimIdx] <= closeVal ? 1 : -1)
              // No record of previous, set to be positive
              : 1;
          }

          return sign;
        }
      }
    }
    function getOHLCOption() {
      function renderItem(params, api) {
        let xValue = api.value(0);
        let openPoint = api.coord([xValue, api.value(1)]);
        let closePoint = api.coord([xValue, api.value(2)]);
        let lowPoint = api.coord([xValue, api.value(3)]);
        let highPoint = api.coord([xValue, api.value(4)]);
        let halfWidth = api.size([1, 0])[0] * 0.35;
        let style = api.style({
          stroke: api.visual('color')
        });

        return {
          type: 'group',
          children: [{
            type: 'line',
            shape: {
              x1: lowPoint[0], y1: lowPoint[1],
              x2: highPoint[0], y2: highPoint[1]
            },
            style: style
          }, {
            type: 'line',
            shape: {
              x1: openPoint[0], y1: openPoint[1],
              x2: openPoint[0] - halfWidth, y2: openPoint[1]
            },
            style: style
          }, {
            type: 'line',
            shape: {
              x1: closePoint[0], y1: closePoint[1],
              x2: closePoint[0] + halfWidth, y2: closePoint[1]
            },
            style: style
          }]
        };
      }
      return {
        backgroundColor: '#eee',
        animation: false,
        legend: chartData.legend,
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'cross' },
          backgroundColor: 'rgba(245, 245, 245, 0.8)',
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          textStyle: { color: '#000' },
          extraCssText: 'width:160px;height:150px;'
        },
        axisPointer: {
          link: { xAxisIndex: 'all' },
          label: {
            backgroundColor: '#777'
          }
        },
        //toolbox: {
        //  feature: {
        //    dataZoom: {
        //      yAxisIndex: false
        //    },
        //    brush: {
        //      type: ['lineX', 'clear']
        //    }
        //  }
        //},
        grid: [
          {
            left: '10%',
            right: '8%',
            bottom: 150
          }
        ],
        xAxis: [
          {
            type: 'category',
            data: chartData.data.categoryData,
            scale: true,
            boundaryGap: false,
            axisLine: { onZero: false },
            splitLine: { show: false },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax',
            axisPointer: {
              z: 100
            }
          }
        ],
        yAxis: [
          {
            scale: true,
            splitArea: {
              show: true
            }
          }
        ],
        dataZoom: [
          {
            type: 'inside',
            start: 98,
            end: 100,
            minValueSpan: 10
          },
          {
            show: true,
            type: 'slider',
            bottom: 60,
            start: 98,
            end: 100,
            minValueSpan: 10
          }
        ],
        series: [
          {
            name: 'Dow-Jones index',
            type: 'custom',
            renderItem: renderItem,
            dimensions: [null, 'open', 'close', 'lowest', 'highest'],
            encode: {
              x: 0,
              y: [1, 2, 3, 4],
              tooltip: [1, 2, 3, 4]
            },
            data: chartData.data.values
          }
        ]
      }
    }
    function getRingOption() {
      // 圆环图各环节的名称和值(系列中各数据项的名称和值)
      let handledData = function () {
        let legendSerie = [];
        let colorSerie = [];
        let dataSerie = [];

        let dataPercent = 0;
        let dataColor = "#3E98C7";
        if (chartData.data) {
          let dataName = chartData.data.name;
          dataPercent = chartData.data.value;
          dataColor = chartData.data.color;

          legendSerie.push(dataName);
          colorSerie.push(dataColor);
          dataSerie.push({ name: dataName, value: dataPercent });
        }
        let otherName = "Unfinished";
        legendSerie.push(otherName);
        colorSerie.push("#D5D6D7");
        dataSerie.push({ name: otherName, value: 1 - dataPercent });

        return {
          legendSerie: legendSerie,
          colorSerie: colorSerie, // 圆环图各环节的颜色
          dataSerie: dataSerie,
          dataColor: dataColor,
          dataPercent: toPercent(dataPercent)
        };
      }();

      function toPercent(value) {
        if (value == 0) {
          return 0;
        }
        let str = Number(value * 100).toFixed();
        str += "%";
        return str;
      }

      if (chartData.legend) {
        chartData.legend.data = handledData.legendSerie;
      }
      if (chartData.graphic) {
        let graphic = {
          type: 'text', // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
          top: 'center', // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
          left: 'center',
          style: {
            text: handledData.dataPercent,
            fill: handledData.dataColor,
            fontSize: chartData.graphic.fontSize,
            fontWeight: chartData.graphic.fontWeight
          }
        };
      }

      // 指定图表的配置项和数据
      return {
        title: chartData.title,
        legend: chartData.legend,
        tooltip: chartData.tooltip,
        backgroundColor: chartData.backgroundColor,
        graphic: graphic,

        // 系列列表
        series: [{
          name: '圆环图系列名称',         // 系列名称
          type: 'pie',                    // 系列类型 
          center: ['50%', '50%'],           // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
          radius: chartData.radius,         // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
          hoverAnimation: false,           // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
          color: handledData.colorSerie,                   // 圆环图的颜色
          label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
            normal: {
              show: false,             // 是否显示标签[ default: false ]
              position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
              formatter: '{b} : {c}件'  // 标签内容
            }
          },
          data: handledData.dataSerie                      // 系列中的数据内容数组。
        }]
      };
    }
    function getRingXOption() {
      // 圆环图各环节的名称和值(系列中各数据项的名称和值)
      let data = [{
        name: '其它',
        value: 320,
        color: '#0000FF'
      }, {
        name: '休闲裤',
        value: 586,
        color: '#00ffff'
      }, {
        name: '女士衬衫',
        value: 874,
        color: '#00ff00'
      }, {
        name: '运动服',
        value: 725,
        color: '#ffff00'
      }];
      // 圆环图各环节的颜色
      let color = function () {
        let serie = [];
        for (let i = 0; i < data.length; i++) {
          serie.push(data[i].color);
          //let item = {
          //  name: ,
          //  type: 'line',
          //  //stack: "总量",
          //  data: data.multiline.data[i]
          //};
          //serie.push(item);
        }
        return serie;
      }();

      // 指定图表的配置项和数据
      return {
        backgroundColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(0,0,0,0.4)' // 0% 处的颜色
          }, {
            offset: 0.5, color: 'rgba(0,0,0,0.4)' 	// 50% 处的颜色
          }, {
            offset: 1, color: 'rgba(0,0,0,0.4)' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        },

        // 标题
        title: [{
          text: '商城各服装销量对比',
          top: '5%',
          left: '3%',
          textStyle: {
            color: '#000',
            fontSize: 18,
          }
        }],

        // 图例
        legend: [{
          selectedMode: true, // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
          top: '10%',
          left: 'center',
          textStyle: { // 图例的公用文本样式。
            fontSize: 14,
            color: '#fff'
          },
          data: ['其它', '休闲裤', '女士衬衫', '运动服']
        }],

        // 提示框
        tooltip: {
          show: true, // 是否显示提示框
          formatter: '{b} </br> 销量{c}件 </br> 占比{d}%', // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
          extraCssText: 'width:160px;height:150px;'
        },

        // graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
        graphic: {
          type: 'text', // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
          top: 'center', // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
          left: 'center', // 同上
          style: {
            text: '各服装销量对比', // 文本块文字。可以使用 \n 来换行。[ default: '' ]
            fill: '#fff',  // 填充色。
            fontSize: 16, // 字体大小
            fontWeight: 'bold' // 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
          }
        },

        // 系列列表
        series: [{
          name: '圆环图系列名称',         // 系列名称
          type: 'pie',                    // 系列类型 
          center: ['50%', '50%'],           // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
          radius: ['30%', '45%'],         // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
          hoverAnimation: true,           // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
          color: color,                   // 圆环图的颜色
          label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
            normal: {
              show: true,             // 是否显示标签[ default: false ]
              position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
              formatter: '{b} : {c}件'  // 标签内容
            }
          },
          labelLine: {                    // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
            normal: {
              show: true,             // 是否显示视觉引导线。
              length: 15,             // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
              length2: 10,            // 视觉引导项第二段的长度。
              lineStyle: {            // 视觉引导线的样式
                //color: '#000',
                //width: 1
              }
            }
          },
          data: data                      // 系列中的数据内容数组。
        }]
      };
    }

    function getQdasIndValueChartOption() {
      let textStyle = createTextStyle(chartData.textStyle);

      let xAxis = {
        type: 'category',
        show: false,
        nameLocation: 'middle', // x location
        nameGap: 30 // y location
      };
      if (chartData.xAxisData) {
        xAxis.show = chartData.xAxisData.show;
        xAxis.name = chartData.xAxisData.title;
        xAxis.data = chartData.xAxisData.labels;
        xAxis.axisLabel = createTextStyle(chartData.xAxisData.labelStyle);
        xAxis.nameTextStyle = createTextStyle(chartData.xAxisData.titleStyle);
      }

      let yAxis = {
        type: 'value',
        show: false,
        nameLocation: 'middle',
        nameGap: 30,
      };
      if (chartData.yAxisData) {
        yAxis.show = chartData.yAxisData.show;
        yAxis.name = chartData.yAxisData.title;
        yAxis.axisLabel = createTextStyle(chartData.yAxisData.labelStyle);
        yAxis.nameTextStyle = createTextStyle(chartData.yAxisData.titleStyle);
      }

      let series = [];
      let updatedSeriesData = getUpdatedSeriesData();
      if (chartData.qdasOptions.displayMode == 'LineOff') {
        updatedSeriesData.forEach(v => v.width = 0);
      }

      for (let i = 0; i < updatedSeriesData.length; i++) {
        let serieData = updatedSeriesData[i];
        let data = [];
        let markPoints = [];

        // special marker points
        if (serieData.markPointsData) {
          for (let k = 0; k < serieData.markPointsData.length; k++) {
            let markPoint = createMarkPoint(serieData.markPointsData[k]);
            if (markPoint)
              markPoints.push(markPoint);
          }
        }
        // get data & marker points
        for (let k = 0; k < serieData.pointsData.length; k++) {
          let pointData = serieData.pointsData[k];
          if (!pointData) {
            data.push(null);
            continue;
          }

          data.push(pointData.value);

          // markPoints
          let markPoint;
          let tolerance = chartData.qdasOptions.tolerance;
          if ((i == 0 || i == 1) && tolerance) {
            if (tolerance.usl && tolerance.markBeyondUsl && tolerance.markBeyondUsl.show && pointData.value > tolerance.usl) {
              markPoint = createMarkPoint(tolerance.markBeyondUsl, k, pointData.value)
            }
            else if (tolerance.lsl && tolerance.markBeyondLsl && tolerance.markBeyondLsl.show && pointData.value < tolerance.lsl) {
              markPoint = createMarkPoint(tolerance.markBeyondLsl, k, pointData.value)
            }
          }
          if (!markPoint && pointData.marker) {
            markPoint = createMarkPoint(pointData.marker, k, pointData.value)
          }
          if (markPoint) {
            markPoints.push(markPoint);
          }
        }

        // markLine
        let markLine = {};
        if (serieData.markLineData) {
          let lineDataArray = [];
          if (serieData.markLineData.horizontalLinesData) {
            for (let k = 0; k < serieData.markLineData.horizontalLinesData.length; k++) {
              let lineData = createHorizontalLine(serieData.markLineData.horizontalLinesData[k]);
              if (lineData) {
                lineDataArray.push(lineData);
              }
            }
          }
          if (serieData.markLineData.verticalLinesData) {
            for (let k = 0; k < serieData.markLineData.verticalLinesData.length; k++) {
              let lineData = createVerticalLine(serieData.markLineData.verticalLinesData[k]);
              if (lineData) {
                lineDataArray.push(lineData);
              }
            }
          }

          // usl & lsl (shown as horizontal line)
          if (chartData.qdasOptions.tolerance && chartData.qdasOptions.tolerance.show) {
            if (chartData.qdasOptions.tolerance.usl) {
              let lineData = createHorizontalLine({
                name: 'USL',
                axisValue: chartData.qdasOptions.tolerance.usl,
                lineStyle: {
                  type: lineTypes.solid,
                  color: 'red'
                }
              });
              if (lineData) {
                lineDataArray.push(lineData);
              }
            }
            if (chartData.qdasOptions.tolerance.lsl) {
              let lineData = createHorizontalLine({
                name: 'LSL',
                axisValue: chartData.qdasOptions.tolerance.lsl,
                lineStyle: {
                  type: lineTypes.solid,
                  color: 'red'
                }
              });
              if (lineData) {
                lineDataArray.push(lineData);
              }
            }
          }
          markLine.silent = !serieData.markLineData.enableHit;
          markLine.symbol = chartData.qdasOptions.showSymbols ? serieData.markLineData.symbol : symbolTypes.none;
          markLine.label = { formatter: '{b}' };
          markLine.data = lineDataArray;
        }

        // push a line to series object
        series.push({
          type: 'line',
          symbol: chartData.qdasOptions.showSymbols ? serieData.symbol : symbolTypes.none,
          color: serieData.color,
          symbolSize: serieData.symbolSize,
          lineStyle: { width: serieData.width },

          data: data,
          markPoint: { data: markPoints },
          markLine: markLine
        });
      };

      return {
        textStyle: textStyle,
        xAxis: xAxis,
        yAxis: yAxis,
        series: series
      };
      function createTextStyle(textStyleData) {
        if (Helper.isNullOrEmptyObject(textStyleData))
          return;

        let textStyle = { show: textStyleData.show };
        if (textStyleData.rotate) {
          textStyle.rotate = textStyleData.rotate;
        }
        if (textStyleData.formatter) {
          textStyle.formatter = textStyleData.formatter;
        }
        if (textStyleData.fontColor) {
          textStyle.color = textStyleData.fontColor;
        }
        if (textStyleData.fontSize) {
          textStyle.fontSize = textStyleData.fontSize;
        }
        if (textStyleData.fontStyle) {
          // ECharts supports: 'normal', 'italic', 'oblique'
          textStyle.fontStyle = textStyleData.fontStyle;
        }
        if (textStyleData.fontWeight) {
          // ECharts supports:: 'normal', 'bold', 'bolder', 'lighter'
          let weight = 'normal';
          switch (textStyleData.fontWeight) {
            case 'narrow':
              weight = 'lighter';
              break;
            case 'italic':
              weight = 'italic';
              break;
            case 'bold':
              weight = 'bolder';
              break;
            case 'black':
              weight = 'bold';
              break;
            case 'oblique':
              weight = 'oblique';
              break;
          }
          textStyle.fontWeight = weight;
        }
        if (textStyleData.fontFamily) {
          textStyle.fontFamily = textStyleData.fontFamily;
        }
        if (textStyleData.backgroundColor) {
          textStyle.backgroundColor = textStyleData.backgroundColor;
        }

        return textStyle;
      }
      function getUpdatedSeriesData() {
        let seriesData = [Helper.deepClone(chartData.lineData)];
        switch (chartData.qdasOptions.displayMode) {
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
        }
        return seriesData;

        function subgroups(connected, colored, weighted) {
          seriesData.push(Helper.deepClone(chartData.lineData));
          if (connected) {
            seriesData.push(Helper.deepClone(chartData.lineData));
          }

          let subgroupSize = chartData.qdasOptions.subgroup ? chartData.qdasOptions.subgroup.subgroupSize : 3;
          let weightWidth = chartData.qdasOptions.subgroup ? chartData.qdasOptions.subgroup.weightWidth : 2;
          let highlightColor = chartData.qdasOptions.subgroup ? chartData.qdasOptions.subgroup.highlightColor : 'blue';

          let serie1 = seriesData[0];
          let serie2 = seriesData[1];
          let serie3 = seriesData[2];

          if (colored) {
            serie2.color = highlightColor;
          }
          if (weighted) {
            serie1.width = weightWidth;
            serie2.width = weightWidth;
          }

          let pointsCount = serie1.pointsData.length;
          for (let i = 0; i < pointsCount; i += subgroupSize) {
            for (let j = 0; j < subgroupSize; j++) {
              let index = i + j;
              if (index >= pointsCount)
                break;

              if (i % 2 == 0) {
                serie2.pointsData[index] = null;
              } else {
                serie1.pointsData[index] = null;
              }
              if (serie3 && j != 0 && j != subgroupSize - 1) {
                serie3.pointsData[index] = null;
              }

              if (serie2.pointsData[index])
                delete serie2.pointsData[index].marker;
              if (serie3 && serie3.pointsData[index]) {
                delete serie3.pointsData[index].marker;
              }
            }
          }

          // others
          delete serie2.markPointsData;
          if (serie3) {
            delete serie3.markPointsData;
            serie3.width = 1;
          }
        }
      }
      function createMarkPoint(markInfo, index, value) {
        if (Helper.isNullOrEmptyObject(markInfo) || (!markInfo.showValue && (!chartData.qdasOptions.showSymbols || !markInfo.symbol)))
          return;

        let markPoint = markInfo.type ? { type: markInfo.type } : { coord: [index, value] };
        if (markInfo.name)
          markPoint.name = markInfo.name;
        if (markInfo.showValue)
          markPoint.value = value;
        if (markInfo.symbol)
          markPoint.symbol = chartData.qdasOptions.showSymbols ? markInfo.symbol : symbolTypes.none;
        if (markInfo.symbolSize)
          markPoint.symbolSize = markInfo.symbolSize;
        if (markInfo.rotate)
          markPoint.symbolRotate = markInfo.rotate;
        if (markInfo.color)
          markPoint.itemStyle = { color: markInfo.color };

        return markPoint;
      }
      function createVerticalLine(lineInfo) {
        let lineData = {
          name: lineInfo.name,
          xAxis: lineInfo.axisValue,
        };
        if (lineInfo.lineStyle) {
          lineData.lineStyle = {
            type: lineInfo.lineStyle.type,
            color: lineInfo.lineStyle.color
          }
        }
        return lineData;
      }
      function createHorizontalLine(lineInfo) {
        let lineData = {
          name: lineInfo.name,
          yAxis: lineInfo.axisValue,
        };
        if (lineInfo.lineStyle) {
          lineData.lineStyle = {
            type: lineInfo.lineStyle.type,
            color: lineInfo.lineStyle.color
          }
        }
        return lineData;
      }
    }
  }
  return {
    lineTypes: lineTypes,
    symbolTypes: symbolTypes,
    symbolSizes: symbolSizes,
    getEChartOption: getEChartOption
  }
}();
