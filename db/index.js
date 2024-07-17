import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

const pool = createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
});

const connectToDatabase = async () => {
  try {
    await pool.getConnection();
    console.log("Successfully connected to msql db ")
  } catch (error) {
    console.log("Database Connection Error");
    console.log(error);
    throw error;
  }
}

export {connectToDatabase, pool}