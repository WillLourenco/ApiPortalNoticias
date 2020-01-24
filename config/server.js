// importa o express
var express = require('express');
var consign = require('consign');


var app = express();
// importo a engine ejs
app.set('view engine', 'ejs');
// seta o caminhos das views
app.set('views','./app/views');

// para incluir diretorio de rotas para variavel app
consign().include('app/routes')
.then('config/DBConnection.js')
.then('app/models')
.into(app);


// exporta o variavel que armazena os caminhos das view e engine
module.exports = app;
