﻿var github = function ($http) {
  var getUser = function (username) {
    return $http.get("https://api.github.com/users/" + username)
      .then(function (response) {
        return response.data;
      });
  };
  var getRepos = function (user) {
    return $http.get(user.repos_url)
      .then(function (response) {
        return response.data;
      });
  };
  var getRepoDetails = function (username, reponame) {
    var repo;
    var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
    return $http.get(repoUrl)
      .then(function (response) {
        repo = response.data;
        return $http.get(repoUrl + "/contributors");
      })
      .then(function (response) {
        repo.contributors = response.data;
        return repo;
      });
  };
  var getChartData = function (chartType) {
    if (chartType === "line") {

    }
    return $http.get("https://youquhome.com/")
      .then(function (response) {
        return [];
      });
  };
  
  return {
    getUser: getUser,
    getRepos: getRepos,
    getRepoDetails: getRepoDetails,
    getChartData: getChartData
  };
};
angular.module("customModule", []).factory("github", github);