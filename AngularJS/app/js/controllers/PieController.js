'use strict';

var PieController = function ($scope, $routeParams, github) {
  var onDataComplete = function (data) {
    //$scope.legend = data.legend;
    //$scope.data = data.data;

    //$scope.legend = ["男", "女"];
    //$scope.data = [
    //  { value: 78, name: '男' },
    //  { value: 56, name: '女' }
    //];
  };
  var onError = function (reason) {
    $scope.error = "Could not fetch the data.";
  };

  github.getChartData("pie").then(onDataComplete, onError);

  $scope.lover = "桂玉敏";
  $scope.legend = ["男", "女"];
  $scope.data = [
    { value: 78, name: '男' },
    { value: 56, name: '女' }
  ];
};

var app = angular.module("projectModule");
app.controller("PieController", PieController);

// 注册在scope和element上的监听器会随着scope和element的销毁而跟着销毁
// 但是注册在service或者注册在DOM节点上的监听器则不会，它们需要显式的移除，否则就要承担内存泄漏的风险
app.directive('sexbar', function () {
  return {
    scope: {
      lover: "@",
      id: "@id",
      legend: "=legend11",
      data: "=data11"
    },
    restrict: 'E',
    template: '<div style="height:300px;"></div>',
    replace: true,
    link: function ($scope, element, attrs, controller) {
      var option = {

        title: {
          //text: $scope.$parent.lover,
          text: '性别比例',//标题说明
          x: 'center'//居中
        },
        // 提示框，鼠标悬浮交互时的信息提示
        tooltip: {
          show: true,
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 图例
        legend: {
          x: 'center',
          y: 'bottom',
          data: $scope.legend
        },

        // 数据内容数组
        series: [
          {
            name: '',
            type: 'pie',
            radius: "55%",
            center: ['50%', '50%'],

            //内置文本标签
            label: {
              normal: { position: 'inner' }
            },
            labelLine: {
              normal: { show: false }
            },

            data: $scope.data,

            itemStyle: {
              normal: { label: { show: false }, labelLine: { show: false } },
              emphasis: {
                label: { show: true, position: 'outer' },
                labelLine: { show: true, lineStyle: { color: 'red' }, },
              }
            }
          }
        ]

      };
      var myChart = echarts.init(document.getElementById($scope.id));
      myChart.setOption(option);
    }
  };
});