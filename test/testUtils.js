const pool = require('../config/db');

const setupDatabase = async () => {
  await pool.query('DELETE FROM users');
};

const tearDownDatabase = async () => {
  await pool.end();
};

module.exports = { setupDatabase, tearDownDatabase };
