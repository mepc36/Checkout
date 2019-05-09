const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser')
const mysql = require('mysql');

// A server executing a program that runs in the background in your computer that also has access to data it writes down. 
// It's a server on a port on my computer
// Then you ping it

// access it with mysql -u root -p

// .createConnection() makes an open channel between the server and the database:
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword"
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // connection.query(sql, function (err, result) {
  //   if (err) { 
  //     throw err;
  //   } else {
  //     console.log("Result: " + result);
  //   }
  // });
});

// CREATE TABLE IF NOT EXISTS tasks (
//   task_id INT AUTO_INCREMENT,
//   title VARCHAR(255) NOT NULL,
//   start_date DATE,
//   due_date DATE,
//   status TINYINT NOT NULL,
//   priority TINYINT NOT NULL,
//   description TEXT,
//   PRIMARY KEY (task_id)
// )  ENGINE=INNODB;


app.use(express.static('compiled'));
app.listen(port, () => `Server is listening on port ${port}`);


app.post('/users', (req, res) => {
  console.log(req);
  // sql = string you're querying the database with 
  connection.query('insert into _DATA users', function (err, result) {
    if (err) { 
      throw err;
    } else {
      console.log(result);
    }
  });
  res.end();
})

module.exports = {

}