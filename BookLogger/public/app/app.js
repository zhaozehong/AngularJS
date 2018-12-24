'use strict';

var app = angular.module("app", ["ngRoute"]);


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
app.config(function ($locationProvider, booksProvider, $routeProvider) {
  booksProvider.setIncludeVersionInTitle(true);
  $locationProvider.hashPrefix(""); // zehong: 奇怪，不加这一行，会默认有个!在#后面，以前没有的。所以所有改变页面的地方都要写“#!/view”

  $routeProvider
    .when("/", {
      templateUrl: "app/templates/books.html",
      controller: "BooksController",
      controllerAs: "books"
    })
    .when("/AddBook", {
      templateUrl: "app/templates/addBook.html",
      controller: "AddBookController",
      controllerAs: "addBook"
    })
    .when("/EditBook/:bookID", {
      templateUrl: "app/templates/editBook.html",
      controller: "EditBookController",
      controllerAs: "bookEditor"
    })
    //.otherwise({ redirectTo: "/" });
    .otherwise("/"); // you must pass in a object as show in above line before v1.3
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