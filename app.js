var app = require('./config/server');
var rotaNoticiais = require('./app/routes/noticias');
var rotaHome = require('./app/routes/home');
var rotaFormIclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');


rotaNoticiais(app);
rotaHome(app);
rotaFormIclusaoNoticia(app);

app.listen(3000, function(){
    console.log('Servidor ON');

});