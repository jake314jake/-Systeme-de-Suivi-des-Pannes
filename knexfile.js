

export default {
  development: {
    client: "sqlite3",
    connection: {
      filename:  "./database/db.db", // Adjust path if needed
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations", // Migration files
    },
    seeds: {
      directory:  "./database/seeds" // Seed files
    },
  },
};
