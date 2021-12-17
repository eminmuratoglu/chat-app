const express = require('express');
const pool = require('../db');
const { authenticateToken } = require('../middleware/authorization');

const router = express.Router();

app.get('/', authenticateToken, async (_req, res) => {
	try {
		const allMessages = await pool.query('SELECT * FROM messages');
		res.send(allMessages.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.post('/', authenticateToken, async (req, res) => {
	try {
		const { text } = req.body;
		const newMsg = await pool.query('INSERT INTO messages (text) VALUES($1) RETURNING *', [ text ]);
		res.send(newMsg.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

// While creating the message, I need to specify user_id of (which) user it belongs to (which user logged in)

module.exports = router;
