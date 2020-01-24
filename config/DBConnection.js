//connection com banco de banco
var mysql = require('mysql');

// parca não fica criando varias coneções quando for subir o banco de dados.
var connMySQL = function () {
    console.log('Conexao ON');
    return mysql.createConnection({
        //      var conneciton = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Abqtdnme1',
        database: 'portal_noticias'
    });
}
// esportar o função e retornar a variavel
module.exports = function () {
//    console.log('O auto load carregou mudulo de conexao com BD')
    return connMySQL;
}
