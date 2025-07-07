const {pool} = require("../config/db.js");
const EventPermission = {
  async getEventPermission({id, user_id}){
    const result = await pool.query("Select * from events where id = ? and user_id = ?", [id, user_id]);
    return result; 
  },
}

module.exports = User

