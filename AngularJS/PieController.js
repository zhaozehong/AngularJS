var PieController = function ($scope, $routeParams, github) {
  var onDataComplete = function (data) {
    //$scope.legend = data.legend;
    //$scope.data = data.data;

    $scope.legend = ["男", "女"];
    $scope.data = [
      { value: 78, name: '男' },
      { value: 56, name: '女' }
    ];
  };
  var onError = function (reason) {
    $scope.error = "Could not fetch the data.";
  };

  github.getChartData("pie").then(onDataComplete, onError);

  //$scope.legend = ["男", "女"];
  //$scope.data = [
  //  { value: 78, name: '男' },
  //  { value: 56, name: '女' }
  //];
};

var app = angular.module("githubViewer");
app.controller("PieController", PieController);

app.directive('sexbar', function () {
  return {
    scope: {
      id: "@id",
      legend: "=legend",
      data: "=data"
    },
    restrict: 'E',
    template: '<div style="height:400px;"></div>',
    replace: true,
    link: function ($scope, element, attrs, controller) {
      var option = {

        title: {
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