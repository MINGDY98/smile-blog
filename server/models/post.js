const pool = require("../lib/pool");

class Post{

  async write(title,content){
    try{
      const sql=`INSERT INTO smile_log.post 
      SET title=?, content=?;
      `
      const result = await pool.query(sql, [
        title,content
      ])
			return result;
		}catch(err) {
      throw err;
    }
  }

  async readAllPost(){
    try{
      const result = await pool.query(`
        SELECT * 
        FROM smile_log.post 
        ORDER BY idpost desc
      `)
			return result;
		}catch(err) {
      throw err;
    }
  }

  async readPost(id){
    try{
      const sql=`
        SELECT * FROM smile_log.post
        WHERE idpost=?`
      const result = await pool.query(sql, [
        id
      ])
			return result;
		}catch(err) {
      throw err;
    }
  }

  async updatePost(id,title,content){
    try{
      const sql=`
        UPDATE smile_log.post 
        SET title=?, content=? 
        WHERE idpost=?;
      `
      const result = await pool.query(sql, [
        title,content,id
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
        WHERE postId=?;
      `
      const result = await pool.query(sql, [id]);
			return result;
		}catch(err) {
      throw err;
    }
  }

  async deletePost(id){

    try{
      const sql=`
        DELETE FROM smile_log.post
        WHERE idpost=?;
      `
      const result = await pool.query(sql, [id]);
			return result;
		}catch(err) {
      throw err;
    }
  }

}

module.exports = new Post();