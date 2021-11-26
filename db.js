const { Pool } = require('pg');

// const { Client } = require('pg');
// const client = new Client({
//   host: "localhost", -> process.env.DB_HOST,
//   user: "postgres", -> process.env.DB_USER
//   port: 5432,
//   password: '', -> process.env.DB_PASSWORD, (the password I made at installation)
//   database: "postgres" -> process.env.DB_NAME,
// });

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
