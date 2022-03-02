const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
host: "db-ross-mysql.c9i4uswfa97s.us-west-2.rds.amazonaws.com",
user: "admin",
password: "terraform123#",
database: "ross-api"
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;