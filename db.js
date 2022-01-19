require('dotenv').config();
const { Pool } = require('pg');

// const devConfig = {
// 	user: process.env.DB_PG_USER,
// 	password: process.env.DB_PG_PASSWORD,
// 	host: process.env.DB_PG_HOST,
// 	database: process.env.DB_PG_DATABASE,
// 	port: process.env.DB_PG_PORT
// };

// const productionConfig = {
// 	connectionString: process.env.DATABASE_URL,
// 	ssl: {
// 		rejectUnauthorized: false
// 	}
// };
// const productionConfig = {
// 	connectionString: process.env.ELEPHANT_DATABASE_URL,
// 	ssl: {
// 		rejectUnauthorized: false
// 	}
// };

// const pool = new Pool(process.env.NODE_ENV === 'production' ? productionConfig : devConfig);

// pool.connect().then(() => {
// 	console.log('connected to db');
// });

// module.exports = pool;

const pool = new Pool({
	connectionString: process.env.ELEPHANT_DATABASE_URL,
	port: 5432,
	ssl: {
		rejectUnauthorized: false
	}
});

pool.connect((err, client, release) => {
	if (err) return console.error('Error acquiring client', err.stack);
	client.query('SELECT NOW()', (err, result) => {
		release();
		if (err) return console.error('Error executing query', err.stack);
		console.log(`👌 ${result.rows[0].now}: connected to db 👌`);
	});
});

module.exports = pool;
