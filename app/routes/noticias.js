var dbConnetion = require('../../config/DBConneciton');
module.exports = function(app){
    // variavel que executa o função
    var conneciton = dbConnetion();

    //request e resposta do servidor
    app.get('/noticias',function(req,res){    

    // função para fazer selects    
        conneciton.query('SELECT * FROM NOTICIAS', function(error,result){
    //   res.send para enviar tudo que foi pedido;  
    //   res.send(result);
    //   res.render para trazer e armazenar conteudo do banco { json}
         res.render("noticias/noticia",{noticias : result});  
        
            
        });
    });

};