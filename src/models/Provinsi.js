const {pool} = require("../config/db.js");
const Provinsi = {
  async getProvinsi(){
    const result = await pool.query("Select * from provinsi");
    return result; 
  }
}

module.exports = User

