var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
/* var productsRouter = require('./routes/products') */
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

// RUTAS DINAMICAS //
app.use('/', indexRouter);
/* app.use('/products', productsRouter); */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/* app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "partials", "index.html" ))
}); */
/* app.get("/login", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "login.html" ))
});

app.get("/productCart", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "productCart.html" ))
});

app.get("/services", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "services.html" ))
});

app.get("/register", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "register.html" )) // redirige a la pagina de register
});
app.get("/productDetail", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "productDetail.html" )) // redirige a la pagina de detalle_de_producto
});  */

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
