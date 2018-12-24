'use strict';

app.controller("BooksController", ["books", "dataService", "logger", "badgeService", "$q", "$cookies", "$log",
  function (books, dataService, logger, badgeService, $q, $cookies, $log) {
    var vm = this;
    vm.appName = books.appName;

    // way 2
    var booksPromise = dataService.getAllBooks();
    var readersPromise = dataService.getAllReaders();
    $q.all([booksPromise, readersPromise])
      .then(getAllDataSuccess)
      .catch(getAllDataError);
    function getAllDataSuccess(dataArray) {
      vm.allBooks = dataArray[0];
      vm.allReaders = dataArray[1];
    }
    function getAllDataError(reason) {
      console.log(reason);
    }

    // way 1
    //dataService.getAllBooks()
    //  .then(getBooksSuccess, getBooksError, getBooksNotification)
    //  .catch(errorCallback)
    //  .finally(getAllBooksComplete);
    //function getBooksSuccess(response) {
    //  //throw "an error occur in success handler";
    //  vm.allBooks = response;
    //}
    //function getBooksError(reason) {
    //  console.log(reason);
    //}
    //function getBooksNotification(notification) {
    //  console.log("Promise Notification: " + notification);
    //}
    //function getAllBooksComplete() {
    //  console.log("getAllBooks has completed");
    //}

    //dataService.getAllReaders()
    //  .then(getReadersSuccess)
    //  .catch(errorCallback)
    //  .finally(getAllReadersComplete);
    //function getReadersSuccess(response) {
    //  vm.allReaders = response;
    //}
    //function getAllReadersComplete() {
    //  console.log("getAllReaders has completed");
    //}

    //function errorCallback(errorMsg) {
    //  console.log("Error Message: " + errorMsg);
    //}

    vm.getBadge = badgeService.retriveBadge;
    vm.favoriteBook = $cookies.favoriteBook;
    vm.lastEdited = $cookies.getObject("lastEdited");


    logger.output("BooksController has been created.");
    $log.log("logging with log");
    $log.info("logging with info");
    $log.warn("logging with warn");
    $log.error("logging with error");
    $log.debug("logging with debug");
  }]);