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

app.put('/upload', async (req, res, next) => {
   
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
    const result = await pool.query('SELECT userImg FROM smile_log.user Where userId=1;')
    res.json({ code: 200, result: "success", data : result[0][0] });
  }
  catch(e) {
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.get('/postList', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM smile_log.post order by idpost desc')
    res.json({ code: 200, result: "success", data : result[0] });
  }
  catch(e) {
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.get('/read/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const sql=`SELECT * FROM smile_log.post Where idpost=?`
    const result = await pool.query(sql, [
      id
    ]);

    let post = result[0];//게시물.
    const sqlComment=`
      SELECT * 
      FROM smile_log.comment 
      WHERE postId = ?
    `
    const resultComment = await pool.query(sqlComment, [
      id
    ])

    post[0]["commentList"]=resultComment[0];
    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.put('/update', async (req, res, next) => {
   
  let {id,title,content}=req.body;

  try {
    const sql=`UPDATE smile_log.post SET title=?, content=? where idpost=?;`
    
    const post = await pool.query(sql, [
      title,content,id
    ])
    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.delete('/delete/post/:id', async (req, res, next) => {

  let {id}=req.params;

  try {
    //댓글도 삭제
    const rpySql = `DELETE FROM smile_log.comment
                    WHERE postId=?;`
    const rpyPost = await pool.query(rpySql, [id]);

    //시 삭제
    const sql=`DELETE FROM smile_log.post
              WHERE idpost=?;`
    const post = await pool.query(sql, [id]);

    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

//댓글

app.post('/createComment', async (req, res, next) => {
   
  let {postId,id,password,comment}=req.body;
  
  try {
    const sql=`Insert into smile_log.comment
              Set postId=?,
                  id=?, 
                  password=?,
                  comment=?;
              `
    const post = await pool.query(sql, [
      postId,id,password,comment
    ])
    res.json({ code: 200, result: "success", data : post });
  }
  catch(e) {
    console.log(e)
    res.json({ code: 500, result: "error", message: e.message });
  }
});

app.delete('/delete/comment/:id', async (req, res, next) => {

  let {id}=req.params;

  try {
    const sql = `DELETE FROM smile_log.comment
                    WHERE commentId=?;`

    const result = await pool.query(sql, [id]);
    res.json({ code: 200, result: "success", data : result });
  }
  catch(e) {
    console.log(e)
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
