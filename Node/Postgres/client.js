var select = require('./select');
var pg = require('pg');

//var conString = "postgres://username:password@localhost:portNumber/databasename";
// 连接字符串=“tcp:// 用户名 : 密码 @localhost:5432/ 库名”;
var conString = 'postgres://postgres:123456@localhost:5432/node';
var client = new pg.Client(conString);

var selectSQLString = 'select * from teacher';

client.connect(function (error, results) {
  if (error) {
    console.log('ClientConnectionReady Error: ' + error.message);
    client.end();
    return;
  }
  console.log('connection success...\n');

  var content = select.select(client, selectSQLString, function (result) {
    console.log(result);

    // here is the right place to close the connection
    client.end();
    console.log('Connection closed.\n');
  });

  console.log(content);

  // the following two code is not accceptable, since the select query will never be executed
  /*client.end();
  console.log('Connection closed.\n');*/
});