// importa a variavel ou configurações a uses server.js 
var app = require('./config/server');

// importa as rotoas dos file ejs
// var rotaNoticiais = require('./app/routes/noticias');
// var rotaHome = require('./app/routes/home');
// var rotaFormIclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');

// para exibir conteudo das rotas
// rotaNoticiais(app);
// rotaHome(app);
// rotaFormIclusaoNoticia(app);

// funcao para subir servidor
app.listen(3000, function () {
    console.log('Servidor ON');

});