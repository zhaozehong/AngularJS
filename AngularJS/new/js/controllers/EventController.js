'use strict';

var EventController = function ($scope) {
  $scope.event = {
    name: "Angular Boot Camp",
    date: '1/1/2013',
    time: '10:30 am',
    location: {
      address: 'Google Headequarters',
      city: 'Mountain View',
      province: 'CA'
    },
    imageUrl: 'img/angularjs-logo.png',
    sessions: [
      {
        name: 'Directives Masterclass',
        creatorName: 'Bob Smith',
        duration: '1 hr',
        level: 'Advanced',
        abstract: 'In this session you will learn the ins and outs of directive.'
      },
      {
        name: 'Scopes for fun and profit',
        creatorName: 'John Doe',
        duration: '30 mins',
        level: 'Introductory',
        abstract: 'This session will take a closer look at scopes.'
      },
      {
        name: 'Well Behaved Controllers',
        creatorName: 'Jane Doe',
        duration: '12 hours',
        level: 'Intermediate',
        abstract: 'Controllers are the beginning of everything Angular does.'
      }
    ]
  }
}


var eventsApp = angular.module("eventsApp");
eventsApp.controller("EventController", EventController);