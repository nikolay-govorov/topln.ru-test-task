const mysql = require('mysql');

const config = require('./config');

const connection = mysql.createConnection(config.get('db'));

module.exports = new Promise((resolve, reject) => {
  connection.connect((error) => {
    if (error) {
      reject(error); return;
    }

    resolve(connection);
  });
});
