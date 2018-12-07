'use strict';
eventsApp.controller("EventController", function ($scope, eventData) {
  $scope.sortorder = "name";
  $scope.snippet = '<span style="color:red">hi there</span>';
  $scope.boolValue = false;
  $scope.mystyle = { color: "red" };
  $scope.myclass = "blue";
  $scope.buttonDisabled = true;

  $scope.upVoteSession = function (session) {
    session.upVoteCount++;
  }
  $scope.downVoteSession = function (session) {
    var count = session.upVoteCount - 1;
    if (count < 0)
      count = 0;
    session.upVoteCount = count;
  }
  $scope.event = eventData.event;
});
