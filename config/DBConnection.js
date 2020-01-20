//connection com banco de banco
var mysql = require('mysql');
module.exports = function(){
    return mysql.createConnection({
    //      var conneciton = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'portal_noticias'
    });  
}
