require('dotenv').config();
const express = require('express');
const pool = require('../db');
const bcrypt = require('bcrypt');
const { verify } = require('jsonwebtoken');
const { generateTokens } = require('../utils/jwt-helpers');

const router = express.Router();

router.post('/login', async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await pool.query('SELECT * FROM users WHERE username = $1', [ username ]);

		if (!user.rows.length > 0) return res.status(401).json({ error: 'Invalid username!' });

		const validPassword = await bcrypt.compare(password, user.rows[0].password);
		if (!validPassword) return res.status(401).json({ error: 'Incorrect password!' });

		let tokens = generateTokens(user.rows[0].id, user.rows[0].username);
		res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
		const { password: _password, ...rest } = user.rows[0];
		res.json({ ...rest, ...tokens });
		// res.json(tokens);
	} catch (err) {
		res.status(401).json({ error: err.message });
	}
});

// take the refresh token from user
// send error if there is no token or it's invalid
// if everything is ok, create new access token, refresh token and send to user
router.get('/refresh_token', (req, res) => {
	try {
		const refreshToken = req.cookies.refresh_token;
		if (!refreshToken) return res.status(401).json({ error: 'No refresh token!' });
		verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
			if (error) return res.status(403).json({ error: error.message });
			let tokens = generateTokens(user);
			res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
			res.status(200).json(tokens);
		});
	} catch (error) {
		res.status(401).json({ error: err.message });
	}
});

router.delete('/logout', (_req, res) => {
	try {
		res.clearCookie('refresh_token');
		return res.status(200).json({ message: 'You logged out successfully' });
	} catch (error) {
		res.status(401).json({ error: error.message });
	}
});

module.exports = router;
