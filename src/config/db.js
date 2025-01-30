import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL."))
  .catch((error) => console.log(`PostgreSQL connection error: ${error}`));

export { pool };
