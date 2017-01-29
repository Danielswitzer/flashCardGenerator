var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Skyler12",
  database: "basicCard"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});
var runSearch = function() {
  inquirer.prompt({
    name: "basicQuestion",
    type: "question",
    message: "Who was the first president of the united states",
   
  }).then(function(answer) {

    switch (answer.action) {
      case "George Washington":
        artistSearch();
        break;
    }
  });
};