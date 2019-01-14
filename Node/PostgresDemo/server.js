﻿//加载对应的模块
var http = require("http");
var url = require("url");

function start(client, route, handle) {
  //创建http服务器
  http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for '" + pathname + "' received.");
    route(client, handle, pathname, response);
  }).listen(8888);   //指定端口

  console.log("Server has started.\n");
}

exports.start = start;