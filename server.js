// const axios = require('axios');
const express = require('express');
require('dotenv').config();
const path = require('path');
const pool = require('./db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/messages', async (req, res) => {
	try {
		const allMessages = await pool.query('SELECT * FROM messages');
		res.send(allMessages.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.post('/api/messages', async (req, res) => {
	try {
		const { text } = req.body;
		const newMsg = await pool.query('INSERT INTO messages (text) VALUES($1) RETURNING *', [ text ]);
		res.send(newMsg.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});
app.get('/api/users', async (req, res) => {
	try {
		const allUsers = await pool.query('SELECT * FROM users');
		res.send(allUsers.rows);
	} catch (err) {
		console.error(err.message);
	}
});
app.post('/api/users', async (req, res) => {
	try {
		const { text } = req.body;
		const newUser = await pool.query('INSERT INTO users (text) VALUES($1) RETURNING *', [ text ]);
		res.send(newUser.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});
// app.get('/api/users/{id}', (req, res) => {});

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(3000);
