const mysql = require('mysql2/promise');

  module.exports.pool = mysql.createPool({
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'alkemy',
      connectionLimit : 10,
      queueLimit : 0
  });