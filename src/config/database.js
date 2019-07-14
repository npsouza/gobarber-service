require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
