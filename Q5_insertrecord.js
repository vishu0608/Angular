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

  var sql = "INSERT INTO student (rollno,name, percentage) VALUES ?";  

var values = [  

[1,'abc', 77.6],  

[2,'def', 89.6],  

[3,'ghi', 91.6]  

];  

con.query(sql, [values], function (err, result) 

 {

    if (err) throw err;

    console.log("Number of records inserted: " + result.affectedRows);  

  });

con.query("SELECT * FROM student", function (err, result, fields) {

    if (err) throw err;

    console.log(result);

  });

});


// PS C:\Users\akash\OneDrive\Desktop\Node Assignment> node .\Q5_insertrecord.js
// Connected!
// Number of records inserted: 3
// [
//   RowDataPacket { rollno: 1, name: 'abc', percentage: 77.6 },
//   RowDataPacket { rollno: 2, name: 'def', percentage: 89.6 },
//   RowDataPacket { rollno: 3, name: 'ghi', percentage: 91.6 }
// ]