import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: process.env.DB_FILE || './database/db.db',
  },
  useNullAsDefault: true,
  migrations: {
    directory: './database/migrations', 
  },
  seeds: {
    directory: './database/seeds', 
  },
});

export default db;
