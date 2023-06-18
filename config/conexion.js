const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db_basico'
});

connection.connect((err) => {
  if (err) {
    console.log('Ha ocurrido un error: '+err);
  }else{
    console.log('La BD está conectada');
  }
});

module.exports = connection;
