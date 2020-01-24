// para fazer o requisição do DBConneciton.js
//var dbConnetion = require('../../config/DBConneciton');

module.exports = function (application) {
    // //request e resposta do servidor
    application.get('/noticias', function (req, res) {
        //Variavel pode utilizar (application) porque mesmo receber rotas e conexao ESTANCIAR
        var connection = application.config.DBConnection();
         //Variavel pode utilizar (application) porque mesmo tem diretorio models   ESTANCIAR 
        var noticiasModel = application.app.models.noticiasModel;
        // Variavel noticiasModel utiliza funcao do file NoticiasModel.js com parametro de connection e tbm o call back        
        noticiasModel.getNoticias(connection, function (error, result) {
                 res.render("noticias/noticias", { noticias: result});
    
     // função para fazer selects           
     //   conneciton.query('SELECT * FROM NOTICIAS', function (error, result) {
            
            // //   res.send para enviar tudo que foi pedido;  
             //    res.send(result);
            
            // //     res.render para trazer e armazenar conteudo do banco { json}
               //     res.render("noticias/noticias", { noticias: result });

        });
    });

};


