const express = require("express");
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const port = 8000;

app
.use(session({secret: 'mipropiaclave'}))
.use(flash())  // para los posts
.use( express.json() )
.use( express.urlencoded({ extended: true }) )   // Para las vistas
.set('views', __dirname + '/views')
.set('view engine', 'ejs')   // para archivos estaticos
.use('/static', express.static("static"))  // importar las rutas
.use(require('./routes/auth'))
.use(require('./routes/routes'))
.listen(port, function() {
  console.log('Escuchando en el puerto ' + port); });