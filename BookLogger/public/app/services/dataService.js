﻿"use strict"

app.factory("dataService", ["$q", "$timeout", function ($q, $timeout) {
  return {
    getAllBooks: getAllBooks,
    getAllReaders: getAllReaders
  };

  function getAllBooks() {
    var booksArray = [
      {
        book_id: 1,
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K Rowling",
        year_published: 2000
      },
      {
        book_id: 2,
        title: "The Cat in the Hat",
        author: "Dr. Seuss",
        year_published: 1957
      },
      {
        book_id: 3,
        title: "Encyclopedia Brown, Boy Detective",
        author: "Donald J. Sobol",
        year_published: 1963
      }
    ];

    var defered = $q.defer();
    $timeout(function () {
      var successful = true;
      if (successful) {
        defered.notify("Just getting started gathering books...");
        defered.notify("Almost done gathering books...");
        defered.resolve(booksArray);
      } else {
        defered.reject("Error retriveving book.");
      }
    }, 1000);
    return defered.promise;
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