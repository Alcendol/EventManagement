const {pool} = require("../config/db.js");
const KategoriAcara = {
  async getKategoriAcara(isActive){
    const result = await pool.query("Select * from kategoriAcara where isActive = ?", [isActive]);
    return result; 
  }
}

module.exports = KategoriAcara 



