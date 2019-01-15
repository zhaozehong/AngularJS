function select(client, response) {
  console.log("Request handler 'select' was called.");
  //执行相应的sql语句
  client.query("select * from teacher;", function (error, results) {
    console.log("in callback function.\n");
    if (error) {
      console.log("error");
      console.log('GetData Error: ' + error.message);
      client.end();
      return;
    }
    if (results.rowCount > 0) {
      //callback(results);
      //指定为json格式输出
      response.writeHead(200, { "Content-Type": "application/json" });

      //先将results对象转化成转化成json格式字符串，然后响应到浏览器上
      response.write(JSON.stringify(results));
      response.end();

      
      /********************************************************
       * 将JS对象转换成JSON格式字符串:
       * --- JSON.stringify(obj) ---
       * var foo={ a: 20, g: [-100007], i: 100006, n: 'Node.JS', o: true, v: 4 };
       * console.log(JSON.stringify(foo));//Node原生支持JSON
       * //{"a":20,"g":[-100007],"i":100006,"n":"Node.JS","o":true,"v":4}
       ********************************************************/

      /********************************************************
       * 将JSON格式字符串转化成JS对象:
       * --- JSON.parse(string) --- 
       * var foo='{"_id":101}'; //属性名必须已经被引号括起，否则转换将失败。
       * var oo=JSON.parse(foo);
       * console.log(oo._id);//101
       * 
       * --- eval() ---
       * var foo="{_id:101}";
       * var oo=eval('('+foo+')');//必须加括号才可以将该字符串转换成对象，加括号表示运行里面的代码。
       * console.log(oo._id);//101
       ********************************************************/
    }
  });
}

exports.select = select;