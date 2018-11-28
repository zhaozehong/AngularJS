var app = angular.module("githubViewer", ["ngRoute", "customModule"]);
app.config(function ($routeProvider, $locationProvider) {
  //$locationProvider.hashPrefix("");
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
    })//collaborators is no longer used, replace it with contributors
    .when("/pie", {
      templateUrl: "pie.html",
      controller: "PieController"
    })
    .otherwise({ redirectTo: "/main" });
});
