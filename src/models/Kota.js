const {pool} = require("../config/db.js");
const Kota = {
  async getKota(provinsiId){
    const result = await pool.query("Select * from kota where provinsiId = ?", [provinsiId]);
    return result; 
  }
}

module.exports = Kota 


