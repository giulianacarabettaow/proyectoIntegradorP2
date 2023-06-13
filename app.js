var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

//Requerir DB
const db = require('./database/models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productsRouter = require ('./routes/products');
//const { edit } = require('./controllers/usersController');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//configuracion de session
app.use(session({ 
  secret: "proyectoIntegradorP2",
  resave: false,
  saveUninitialized: true}));

//middleware session
app.use(function(req, res, next){ //con est función pedimos que todo lo que hagamos con req.session se pase a las vistas
  if (req.session.usuario != undefined){
    res.locals.user= req.session.usuario;
    return next();
  }
  return next(); //para que no se frene el proyecto. <Una vez que se completo siga con el flujo
})

//Middleware de cookies (la configuración está en el controlador)
app.use(function(req, res, next){
  if(req.cookies.usuarioId != undefined && req.session.user ==undefined){ //si existe una cookie para cierto id, pero no se encuentra una sesion
    db.Usuario.findByPk(req.cookies.usuarioId) //buscar el id que corresponda al usuario
    .then((usuario)=>{ 
      req.session.usuario = usuario.dataValues; //entonces requerir la sesion con los datos del usuario
      res.locals.usuario = usuario.dataValues; //devolver en las vistas la sesion del usuario
      return next();
    }).catch((error)=>{
      console.log(error);
    });
  }else {
    return next();
  }
})


//Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
