"use strict"

app.controller("EditBookController", ["$routeParams", "dataService", "books", EditBookController]);
function EditBookController($routeParams, books) {
  var vm = this;
  vm.currentBook = books.filter(function (item) {
    return item.book_id == $routeParams.bookID;
  })[0];
}