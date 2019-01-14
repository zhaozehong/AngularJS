var f = require('./function');
var pg = require('pg');
// 连接字符串=“tcp:// 用户名 : 密码 @localhost:5432/ 库名”;
var conString = 'tcp://postgres:123456@localhost:5432/node';
var client = new pg.Client(conString);

var value = ['10', 'fillp', 'abc'];
var insertSQLString = 'insert into teacher values($1,$2,$3)';
var selectSQLString = 'select * from teacher';
var updateSQLString = "update teacher set NAME='ipone' where ID='4'";
var deleteSQLString = "delete from teacher where ID='10'";

client.connect(function (error, results) {
  if (error) {
    console.log('ClientConnectionReady Error: ' + error.message);
    client.end();
    return;
  }
  console.log('Connecting to postgres...');
  console.log('Connected to postgres automatically.');
  console.log('connection success...\n');

  f._select(client, selectSQLString);
  f._insert(client, insertSQLString, value);
  f._select(client, selectSQLString);
  f._delete(client, deleteSQLString);
});