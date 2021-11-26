// const axios = require('axios');
const express = require('express');
require('dotenv').config();
const path = require('path');
const pool = require('./db');

pool.query(`Select * from users`, (err, res) => {
	console.log(err ? err.stack : res.rows);
});

const app = express();

let messages = [
	{ id: 1, name: 'John', text: 'Hello from John, bois!' },
	{ id: 2, name: 'Marie', text: 'Hello from Marie to everyone!' }
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/messages', (req, res) => {
	res.send(messages);
});
app.post('/api/messages', (req, res) => {
	let message = req.body;
	messages.push(message);
	res.send(message);
});
// app.get('/api/users', (req, res) => {
//   res.send(pool.query(`Select * from users`, (err, res) => {
//     console.log(err ? err.stack : res.rows);
//     pool.end();
//   }))
// });
app.post('/api/users', async (req, res) => {
	try {
		const { username } = req.body;
		const newUser = await pool.query('INSERT INTO users (username) VALUES($1) RETURNING *', [ username ]);
		res.send(newUser.rows[0]);
	} catch (err) {
		console.error(err);
	}
});
// app.get('/api/users/{id}', (req, res) => {});

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(3000);

// INSERT INTO users
// 	(id, username, created_at)
// 	VALUES
// 	(1, 'Ashley', NOW())
