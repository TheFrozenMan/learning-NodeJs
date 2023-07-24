 const mysql = require('mysql2'); 

 const pool = mysql.createPool({
    host:'localhost', 
    user: 'root', 
    database:'node-complete',
    password:'@mD712333517'
 })  ;


 exports.pool = pool.promise();