var app = angular.module("githubViewer", ["ngRoute", "customModule"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/main", {
      templateUrl: "main.html",
      controller: "MainController"
    })
    .when("/user/:username", {
      templateUrl: "user.html",
      controller: "UserController"
    })
    .when("/repo/:username/:reponame", {
      templateUrl: "repo.html",
      controller: "RepoController"
    })//collaborators, contributors
    .otherwise({ redirectTo: "/main" });
});
