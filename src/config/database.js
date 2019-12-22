require('dotenv/config');

const databaseConfig = {
  dialect: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

if (process.env.DATABASE_URL) {
  databaseConfig.uri = process.env.DATABASE_URL;
  databaseConfig.native = true;
} else {
  databaseConfig.host = process.env.DB_HOST;
  databaseConfig.password = process.env.DB_PASS;
  databaseConfig.database = process.env.DB_NAME;
  databaseConfig.username = process.env.DB_USER;
}

module.exports = databaseConfig;
