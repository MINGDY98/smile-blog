const pool = require("../lib/pool");

class User{
  async read(){
    try{
      const result = await pool.query(`SELECT * FROM smile_log.user Where userId=1;`);
      return result;
    }catch(err) {
      throw err;
    }
  }
}

module.exports = new User();
