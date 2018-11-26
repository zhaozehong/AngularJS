var MainController = function ($scope, github, $interval, $log, $anchorScroll, $location) {
  var onUserComplete = function (data) {
    $scope.user = data;
    github.getRepos($scope.user)
      .then(onRepos, onError);
  };
  var onRepos = function (data) {
    $scope.repos = data;
    $location.hash("userDetails");
    $anchorScroll();
  };
  var onError = function (reason) {
    $scope.error = "Could not fetch the data.";
  };
  var decrementCountdown = function () {
    $scope.countdown -= 1;
    if ($scope.countdown <= 0) {
      $scope.search();
    }
  }
  var countdownInterval = null;
  var startCountDown = function () {
    countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
  }
  $scope.search = function (username) {
    $log.info("Searching for " + $scope.username);
    //$log.log("log: Searching for " + $scope.username);
    //$log.error("error: Searching for " + $scope.username);
    //$log.warn("warn: Searching for " + $scope.username);
    //$log.debug("debug: Searching for " + $scope.username);

    //$http.get("https://api.github.com/users/" + username)
    github.getUser($scope.username)
      .then(onUserComplete, onError);
    if (countdownInterval) {
      $interval.cancel(countdownInterval);
      $scope.countdown = null;
    }
  };

  $scope.username = "angular";
  $scope.message = "Github Viewer";
  $scope.repoSortOrder = "-stargazers_count";
  $scope.countdown = 5;

  startCountDown();
};

var app = angular.module("githubViewer", ["customModule"]);
//app.controller("MainController", ["$scope", "github", "$interval", "$log", "$anchorScroll", "$location", MainController]);
app.controller("MainController", MainController);