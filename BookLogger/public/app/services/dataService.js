﻿"use strict"

app.factory("dataService", ["$q", "$timeout", "$http", "constantService",
  function ($q, $timeout, $http, constantService) {
    return {
      getAllBooks: getAllBooks,
      getAllReaders: getAllReaders
    };

    function getAllBooks() {
      return $http({
        method: "GET",
        url: "api/books",
        headers: {
          "PS-BookLogger-Version": constantService.APP_VERSION
        }
      })
        .then(sendResponseData)
        .catch(sendGetBooksError);
    }
    function sendResponseData(response) {
      return response.data;
    }
    function sendGetBooksError(response) {
      return $q.reject("Error retrieving book(s). (HTTP status: " + response.status + ")");
    }

    function updateBook(book) {
      return $http({
        method: "PUT",
        url: "api/books/" + book.book_id,
        data: book
      })
        .then(updateBookSuccess)
        .catch(updateBookError);
    }
    function updateBookSuccess(response) {
      return "Book updated: " + response.config.data.title;
    }
    function updateBookError(response) {
      return $q.reject("Error updating book. (HTTP status: " + response.status + ")");
    }

    function getAllReaders() {
      var readersArray = [
        {
          reader_id: 1,
          name: "Marie",
          weeklyReadingGoal: 315,
          totalMinutesRead: 5600
        },
        {
          reader_id: 2,
          name: "Daniel",
          weeklyReadingGoal: 210,
          totalMinutesRead: 3000
        },
        {
          reader_id: 3,
          name: "Lanier",
          weeklyReadingGoal: 140,
          totalMinutesRead: 600
        }
      ];

      var defered = $q.defer();
      $timeout(function () {
        defered.resolve(readersArray);
      }, 1500);
      return defered.promise;
    }
  }]);