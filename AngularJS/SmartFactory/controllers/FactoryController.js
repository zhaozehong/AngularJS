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
  var ringColor = "#3E98C7";

  $scope.chartInteraction = function (chart, eventParams) {
    if (eventParams.name) {
      $timeout(function () {
        $location.path("/machine/" + eventParams.name);
      }, 1);
    }
  }
  $scope.charttype = 'pie';
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
    ring1: {
      legend: {
        selectedMode: true, // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
        top: '10%',
        left: 'center',
        textStyle: { // 图例的公用文本样式。
          fontSize: 14,
          color: '#000'
        },
        data: ['其它', '休闲裤', '女士衬衫', '运动服']
      },
      // graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
      graphic: {
        type: 'text', // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
        top: 'center', // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
        left: 'center', // 同上
        style: {
          text: '', // 文本块文字。可以使用 \n 来换行。[ default: '' ]
          fill: ringColor,  // 填充色。
          fontSize: 50, // 字体大小
          fontWeight: 'bold' // 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
        }
      },
      data: [{
        name: "finished",
        value: 0.2,
        color: ringColor
      }, {
        name: "left",
        value: 0.8,
        color: "#D5D6D7"
      }]
    }
  };
  
});
