// const axios = require('axios');
const express = require('express');
const path = require('path');
// const { Client } = require('pg');
// const client = new Client({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: '',
//   database: "postgres"
// });

// client.connect();

// client.query(`Select * from users`, (err, res) => {
// 	console.log(err ? err.stack : res.rows);
// 	client.end();
// });

const app = express();

let messages = [
	{ id: 1, name: 'Jhon', text: 'Hello from John, bois!' },
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
// app.get('/api/users', (req, res) => {});
// app.post('/api/users', (req, res) => {});
// app.get('/api/users/{id}', (req, res) => {});

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(3000);
