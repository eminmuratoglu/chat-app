require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

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

io.on('connection', (socket) => {
	console.log('a user connected');
	io.emit('welcome', 'hello, this is socket server');
});

////

app.use('/', express.static(path.join(__dirname, 'client/build')));

server.listen(process.env.PORT || 3000);
