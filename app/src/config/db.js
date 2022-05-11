const mysql = require('mysql');

const db = mysql.createConnection({
  host: "login-lecture-220511.cyonjvmuxzaq.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "Kd31-aws",
  database: "login_lecture",
});

db.connect();

module.exports = db;