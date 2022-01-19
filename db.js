const { Pool } = require('pg');

const devConfig = {
	user: process.env.DB_PG_USER,
	password: process.env.DB_PG_PASSWORD,
	host: process.env.DB_PG_HOST,
	database: process.env.DB_PG_DATABASE,
	port: process.env.DB_PG_PORT
};

const productionConfig = {
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	}
};

const pool = new Pool(process.env.NODE_ENV === 'production' ? productionConfig : devConfig);

pool.connect();

module.exports = pool;
