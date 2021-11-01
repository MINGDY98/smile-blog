var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();
var pool = require("./lib/pool");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.post('/write', async (req, res, next) => {
   
  let {title,content}=req.body;
  
  try {
    const sql=`INSERT INTO smile_log.post 
    SET title=?, content=?;
    `
    const post = await pool.query(sql, [
      title,content
    ])
    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.post('/upload', async (req, res, next) => {
   
  let {img}=req.body;
  console.log("img",img);
  try {
    const sql=`UPDATE smile_log.user SET userImg=? WHERE userId=1;`
    
    const post = await pool.query(sql, [
      img
    ])
    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.get('/profile', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT userImg FROM smile_log.user WHere userId=1;')
    console.log(result[0][0]);
    res.json({ code: 200, result: "success", data : result[0][0] });
  }
  catch(e) {
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.get('/post', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM smile_log.post')
    res.json({ code: 200, result: "success", data : result[0] });
  }
  catch(e) {
    res.json({ code: 500, result: "error", message: e.message });
  }
});

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
