const express = require('express');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const usersRouter = require('./routes/users');
const messagesRouter = require('./routes/messages');
const authRouter = require('./routes/auth');
const { authenticateToken } = require('./middleware/authorization');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/secret', authenticateToken, async (_req, res) => {
	try {
		res.send('Top secret information');
	} catch (error) {
		res.send('error occured :(', error.message);
	}
});

app.use('/api/users', usersRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/auth', authRouter);

////

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.listen(3000);
