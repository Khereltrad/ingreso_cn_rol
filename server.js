const express = require("express");
const app = express();
const port = 8000;

const session = require('express-session');
const flash = require('connect-flash');

app
.use(session({secret:'M11.n1.5am'}))
.use(flash())  // para los posts
.use( express.json() )
.use( express.urlencoded({ extended: true }) )   // Para las vistas
.set('views', __dirname + '/views')
.set('view engine', 'ejs')   // para archivos estaticos
.use('/static', express.static("static")) 
.use(require('./routes/auth'))
.use(require('./routes/routes'))
.listen( port, () => console.log(`Listening on port: ${port}`) );