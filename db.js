const { Pool } = require('pg');

// const pool = new Pool({
// 	user: process.env.DB_PG_USER,
// 	password: process.env.DB_PG_PASSWORD,
// 	host: process.env.DB_PG_HOST,
// 	database: process.env.DB_PG_DATABASE,
// 	port: process.env.DB_PG_PORT
// });

const pool = new Pool({
	connectionString: process.env.DATABASE_URL
});

module.exports = pool;
