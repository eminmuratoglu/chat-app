const express = require('express');
const pool = require('../db');
const { authenticateToken } = require('../middleware/authorization');

const router = express.Router();

router.get('/', authenticateToken, async (_req, res) => {
	try {
		const allMessages = await pool.query('SELECT * FROM messages');
		res.send(allMessages.rows);
	} catch (err) {
		console.error(err.message);
	}
});

router.post('/', authenticateToken, async (req, res) => {
	try {
		const { username, text, user_id } = req.body;
		const io = req.app.get('socketio');
		const newMsg = await pool.query('INSERT INTO messages (text, user_id, username) VALUES($1, $2, $3) RETURNING *', [
			text,
			user_id,
			username
		]);

		io.emit('getMessage', { username, text });

		res.send(newMsg.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
