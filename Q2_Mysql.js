import { createConnection } from 'mysql';

var con = createConnection({

  host: "localhost",

  user: "root",

  password: "vishu"

});

con.connect(function(err) {

  if (err) throw err;

  console.log("Connected!");

  con.query("CREATE DATABASE studentdb", function (err, result) {

    if (err) throw err;

    console.log("Database created");

  });

});

// mysql> show databases;
// +--------------------+
// | Database           |
// +--------------------+
// | information_schema |
// | mysql              |
// | performance_schema |
// | sakila             |
// | studentdb          |
// | sys                |
// | world              |
// +--------------------+
// 7 rows in set (0.00 sec)