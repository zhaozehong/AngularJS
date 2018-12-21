'use strict';

var app = angular.module("app", []);


// way 2
app.provider("books", function (constantService) {
  this.$get = function () {
    var appName = constantService.APP_TITLE;
    var appDesc = constantService.APP_DESC;

    var version = constantService.APP_VERSION;
    if (includeVersionInTitle) {
      appName += " " + version;
    }

    return {
      appName: appName,
      appDesc: appDesc
    };
  };
  var includeVersionInTitle = false;
  this.setIncludeVersionInTitle = function (value) {
    includeVersionInTitle = value;
  }
});
app.factory("books1", function () {
  var a = 10;
  return { a: a };
});
app.config(function (booksProvider) {
  booksProvider.setIncludeVersionInTitle(true);
});

// way 1
//app.config("books", function ($provide, constantService) {
//  this.$get = function () {
//    var appName = constantService.APP_TITLE;
//    var appDesc = constantService.APP_DESC;
//    return {
//      appName: appName,
//      appDesc: appDesc
//    };
//  };
//});