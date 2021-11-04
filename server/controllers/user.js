const USER = require("../models/user");

exports.read = async (req, res, next) => {
  try {
    const result = await USER.read();
    res.json({ 
      code: 200, 
      result: "success", 
      data : result[0][0]
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