require('dotenv').config();
require('colors');

const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
});

const connectDB = async () => {
  try{
    const conn = await pool.getConnection();
    console.log(`MariaDB Connected: ${conn}`.cyan.underline.bold);
    conn.release();
  }
  catch (err){
    console.error(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
  pool,
}

