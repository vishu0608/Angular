var mysql = require('mysql');

var con = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "akash",

  database: "studentdb"

});

con.connect(function(err) {

  if (err) throw err;

  console.log("Connected!");

 

  var sql = "CREATE TABLE student(rollno int,name VARCHAR(255), percentage double)";

  con.query(sql, function (err, result) {

    if (err) throw err;

    console.log("Table created");

  });

});
// PS C:\Users\akash\OneDrive\Desktop\Node Assignment> node Q2a.js
// Connected!
// Table created


// mysql> show tables;
// +---------------------+
// | Tables_in_studentdb |
// +---------------------+
// | student             |
// +---------------------+
// 1 row in set (0.03 sec)