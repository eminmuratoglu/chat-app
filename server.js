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

app.set('socketio', io);

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

// io.on('connection', (socket) => {
// 	// console.log('a user connected');
// 	// io.emit('chat-message', 'hi, this is socket server');

// 	socket.on('sendMessage', ({ username, text }) => {
// 		io.emit('getMessage', { username, text });
// 	});

// 	socket.on('disconnect', () => {
// 		console.log('user disconnected');
// 	});
// });

// socket.emit('message', "this is a test"); //sending to sender-client only
// socket.broadcast.emit('message', "this is a test"); //sending to all clients except sender
// io.emit('message', "this is a test"); //sending to all clients, include sender
// socket.broadcast.to('game').emit('message', 'nice game'); //sending to all clients in 'game' room(channel) except sender
// socket.to('game').emit('message', 'enjoy the game'); //sending to sender client, only if they are in 'game' room(channel)
// socket.broadcast.to(socketid).emit('message', 'for your eyes only'); //sending to individual socketid
// io.in('game').emit('message', 'cool game'); //sending to all clients in 'game' room(channel), include sender
// io.of('myNamespace').emit('message', 'gg'); //sending to all clients in namespace 'myNamespace', include sender
// socket.emit(); //send to all connected clients
// socket.broadcast.emit(); //send to all connected clients except the one that sent the message
// socket.on(); //event listener, can be called on client to execute on server
// io.sockets.socket(); //for emiting to specific clients
// io.sockets.emit(); //send to all connected clients (same as socket.emit)
// io.sockets.on() ; //initial connection from a client.

//SERVER
// SOCKET.ON --> TAKE EVENT FROM CLIENT
// IO.EMIT --> SEND EVENT TO EVERY CLIENT

//CLIENT
// SOCKET.EMIT --> SEND EVENT TO SERVER
// SOCKET.ON --> TAKE EVENT FROM SERVER

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });
// });

////

app.use('/', express.static(path.join(__dirname, 'client/build')));

server.listen(process.env.PORT || 3000);
