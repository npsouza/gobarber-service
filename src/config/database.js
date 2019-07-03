module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  password: 'docker',
  database: 'gobarber',
  username: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
