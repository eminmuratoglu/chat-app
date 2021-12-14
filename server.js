const express = require('express');
require('dotenv').config();
const path = require('path');
const pool = require('./db');
const cookieParser = require('cookie-parser');
const app = express();
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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
// While creating the message, I need to specify user_id of which user it belongs to (which user logged in)

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

////

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(3000);
