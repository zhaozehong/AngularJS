'use strict';

app.controller("BooksController",
  function ($scope, books, books1, dataService, logger, badgeService) {
    $scope.appName = books.appName;
    $scope.a = books1.a;

    $scope.allBooks = dataService.getAllBooks();

    var vm = this;
    vm.appName = books.appName;
    vm.allBooks = dataService.getAllBooks();
    vm.allReaders = dataService.getAllReaders();

    vm.getBadge = badgeService.retriveBadge;

    logger.output("BooksController has been created.");
  });