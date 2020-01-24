module.exports = function () {
    // funcao recebe (connection), variavel da noticias.js e o back e faz funcao de query
    this.getNoticias = function(connection, callback) {
        connection.query('Select * from noticias', callback);
    }

    this.getNoticia = function(connection,callback){
        connection.query('SELECT * FROM NOTICIAS WHERE ID_NOTICIA = 4',callback)     
    }
    return this;

}