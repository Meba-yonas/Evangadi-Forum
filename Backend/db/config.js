const mysql2 = require("mysql2");

const dbconnection = mysql2.createPool({
  user:'u0loh2tpa54m5qvt',
  database:"brpzlcvc5xbkfzxsrk1f",
  host:"brpzlcvc5xbkfzxsrk1f-mysql.services.clever-cloud.com",
  password:"LFzaB65sUbPt2omicrav",
  connectionLimit: 10,
});

module.exports = dbconnection.promise();
