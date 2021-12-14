const express = require('express');
const pool = require('../db');
const bcrypt = require('bcrypt');
const { authenticateToken } = require('../middleware/authorization');

const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
	try {
		const allUsers = await pool.query('SELECT * FROM users');
		res.json(allUsers.rows);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

router.post('/', async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		const newUser = await pool.query('INSERT INTO users (username, password) VALUES($1, $2) RETURNING *', [
			req.body.username,
			hashedPassword
		]);
		res.json(newUser.rows[0]);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// app.get('/api/users/{id}', (req, res) => {});

module.exports = router;
