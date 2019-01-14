function select(client, selectSQLString, callback) {
    var content = 'select beginning\n';
    client.query(selectSQLString, function selectCb(error, results) {
        console.log("in select callback function\n");
        if (error) {
            console.log('GetData Error: ' + error.message);
            client.end();
            return;
        }
        //在执行完查询以后，结果集被存放在results中,你可以使用console.log(results)打印出来看看
        if (results.rowCount > 0) {
            callback(results);
        }
    });

    content += 'select end!\n';
    return content;
}

exports.select = select;