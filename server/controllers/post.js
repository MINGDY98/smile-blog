const POST = require("../models/post");
const COMMENT =require("../models/comment");

exports.writePost = async (req, res, next) => {
  let {title,content}=req.body;
  try {
    const result = await POST.write( title,content );
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

exports.readAll = async (req, res, next) => {
  try {
    const result = await POST.readAllPost();
    res.json({ 
      code: 200, 
      result: "success", 
      data : result[0]
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

exports.readPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await POST.readPost(id);
    let post = result[0];
    const result2 = await COMMENT.readComments(id);
    
    post[0]["commentList"]=result2[0];

    res.json({ 
      code: 200, 
      result: "success", 
      data : post
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

exports.updatePost = async (req, res, next) => {
  try {
    let {id,title,content}=req.body;
    const result = await POST.updatePost(id,title,content);
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

exports.deletePost = async (req, res, next) => {
  let {id}=req.params;
  try {
    console.log("ㅇㅇ");
    const result = await POST.deleteComment(id);
    const result2 = await POST.deletePost(id);
    res.json({ 
      code: 200, 
      result: "success", 
      data : result,
      data2 : result2
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