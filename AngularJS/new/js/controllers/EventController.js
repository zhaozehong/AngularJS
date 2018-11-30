'use strict';

var EventController = function ($scope) {
  $scope.event = {
    date: '1/1/2013',
    time: '10:30 am',
    location: {
      address: 'Google Headequarters',
      city: 'Mountain View',
      province: 'CA'
    },
    imageUrl: '/img/angularjs-log.png'
  }
}


var app = angular.module("eventApp", []);
app.controller("EventController", EventController);