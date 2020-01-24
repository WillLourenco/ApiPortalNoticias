module.exports = function (app) {

    app.get('/noticia', function (req, res) {
        var connection = app.config.DBConnection();
        var noticiasModel = app.app.models.noticiasModel;
              
        noticiasModel.getNoticia(connection, function(error,result){
            res.render('noticias/noticia', { noticia: result });
        });  
            //view/file
  
        //  res.send(result)  
        //   var z = result.map(n => n.noticia)
        //    res.send(z)  
     });
    

};