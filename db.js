const { Pool } = require('pg');

const pool = new Pool({
	host: 'localhost',
	user: process.env.DB_PG_USER,
	password: process.env.DB_PG_PASSWORD,
	port: 5432,
	database: process.env.DB_PG_DATABASE
});

module.exports = pool;

///////////////

// CREATE TABLE users(
// 	id SERIAL PRIMARY KEY,
// 	username VARCHAR(50) NOT NULL,
// 	created_at TIMESTAMPTZ DEFAULT NOW()
// )

// CREATE TABLE messages(
// 	id SERIAL PRIMARY KEY,
// 	user_id SERIAL,
// 	text VARCHAR(250) NOT NULL,
// 	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
// 	FOREIGN KEY (user_id) REFERENCES users(id)
// 		ON UPDATE CASCADE
// 		ON DELETE CASCADE
// )
