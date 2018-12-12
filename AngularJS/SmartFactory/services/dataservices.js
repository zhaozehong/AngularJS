'use strict';

app.factory("dataService", function ($http, $q) {
  var getImageData = function (factoryName) {
    var defer = $q.defer();
    $http.get("https://ecomfe.github.io/echarts-examples/public/data/asset/data/stock-DJI.json")
      .then(function (response) {
        defer.resolve(response.data);
      }, function (reason) {
        defer.reject(reason);
      });
    return defer.promise;
  };

  return {
    getImageData: getImageData,
  };
});