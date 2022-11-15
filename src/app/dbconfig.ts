import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

const query = (sql: string, args: any[]): Promise<any> => new Promise((resolve, reject) => {
  pool.query(sql, args, (err, rows) => {
    if (err) {
      return reject(err);
    }
    return resolve(rows);
  });
});

export default query;
