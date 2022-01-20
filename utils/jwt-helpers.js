require('dotenv').config();

const jwt = require('jsonwebtoken');

function generateTokens({ user_id, username }) {
	const user = { user_id, username };
	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5s' });
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '14d' });
	return { accessToken, refreshToken };
}

module.exports = { generateTokens };
