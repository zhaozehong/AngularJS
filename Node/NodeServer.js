var http = require('http');
var fs = require('fs');
var url = require('url');

var file_path = "C:\\Users\\zehong.zhao\\Pictures\\Saved Pictures\\1.png";
var file_stream;
var buffer_box = [];
var file_length = 0;

var file_name = file_path.substr(file_path.lastIndexOf('\\') + 1);

fs.stat(file_path, function (err, stat) {
  if (err) {
    if ('ENOENT' == err.code) {
      console.log('File does not exist...');
    } else {
      console.log('Read file exception...');
    }
  } else {
    file_stream = fs.createReadStream(file_path);
    file_stream.on('data', function (chunk) {
      buffer_box.push(chunk);
      file_length += chunk.length;
    });
    file_stream.on('end', function () {
      console.log("文件读取完毕");
    });
    file_stream.on('error', function (err) {
      console.log("文件读取失败！");
    });

    var server = http.createServer(function (request, response) {
      var h_name = request.headers.host;
      var h_path = url.parse(request.url).pathname;

      if (h_path === '/xiaohong') {
        response.setHeader('Content-Type', 'application/octet-stream');
        response.setHeader('Content-Disposition', 'attachment; filename=' + encodeURIComponent(file_name));

        for (var buffer_index = 0; buffer_index < buffer_box.length; buffer_index++) {
          response.write(buffer_box[buffer_index]);
        }
        response.end();
      }
      else if (h_name === 'localhost:8000' && h_path === '/exit') {
        response.end('Bye!');
        server.close();
        console.log('Bye!');
      }
      else {
        response.end('Hello, iLinkIT');
      }

    });
    let portNumber = 4242;
    server.listen(portNumber);
    console.log("HTTP服务器启动中，端口：" + portNumber + ".....");

  }//end else,读取文件没有发生错误
});