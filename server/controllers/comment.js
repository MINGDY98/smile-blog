const COMMENT = require("../models/comment");

exports.write = async (req, res, next) => {
  try {
    let {postId,id,password,comment}=req.body;
    const result = await COMMENT.write(postId,id,password,comment);
    res.json({ 
      code: 200, 
      result: "success", 
      data : result
    });
  }
  catch(e) {
    res.json({ 
      code: 500, 
      result: "error", 
      message: e.message 
    });
  }
}

exports.deleteComment = async (req, res, next) => {
  try {
    let {id}=req.params;

    const result = await COMMENT.deleteComment(id);
    res.json({ 
      code: 200, 
      result: "success",
      data : result
    });
  }
  catch(e) {
    res.json({ 
      code: 500, 
      result: "error", 
      message: e.message 
    });
  }
}