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
// 	id SERIAL NOT NULL PRIMARY KEY,
// 	username VARCHAR(25) NOT NULL,
// 	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
// )

// CREATE TABLE messages(
// 	id SERIAL NOT NULL,
// 	user_id SERIAL,
// 	text VARCHAR(250),
// 	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
// 	PRIMARY KEY(id),
// 	FOREIGN KEY (user_id) REFERENCES users(id)
// )
