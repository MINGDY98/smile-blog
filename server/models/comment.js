const pool = require("../lib/pool");

class Comment{
  async write(postId,id,password,comment){
    try{
      const sql=`
      Insert into smile_log.comment
      Set postId=?,
          id=?, 
          password=?,
          comment=?;
      `
      const result = await pool.query(sql, [
        postId,id,password,comment
      ])
			return result;
		}catch(err) {
      throw err;
    }
  }

  async deleteComment(id){
    try{
      const sql=`
      DELETE FROM smile_log.comment
      WHERE commentId=?;
      `
      const result = await pool.query(sql, [id]);
			return result;
		}catch(err) {
      throw err;
    }
  }

  async readComments(id){
    try{
      const sqlComment=`
        SELECT * 
        FROM smile_log.comment 
        WHERE postId = ?
      `
      const result = await pool.query(sqlComment, [
        id
      ])
			return result;
		}catch(err) {
      throw err;
    }
  }
}

module.exports = new Comment();
