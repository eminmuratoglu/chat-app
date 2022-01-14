import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TopBar from './TopBar';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import './Chat.css';
import Routes from './Routes';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { io } from 'socket.io-client';

function Chat() {
	const [ messages, setMessages ] = useState([]);
	const [ users, setUsers ] = useState([]);
	const [ user, setUser ] = useState(null);
	const [ inputText, setInputText ] = useState('');

	const socket = io();

	useEffect(() => {
		socket.on('getMessage', (newMsg) => {
			setMessages((prev) => [ ...prev, newMsg ]);
		});

		getUsers();
		getMessages();

		return () => {
			// socket.emit('disconnect');
			socket.off();
		};
	}, []);

	useEffect(
		() => {
			getUsers();
			getMessages();
		},
		[ user ]
	);

	const axiosJWT = axios.create();

	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const getMessages = async () => {
		if (user) {
			const response = await axiosJWT.get('api/messages', {
				headers: {
					authorization: `Bearer ${user.accessToken}`
				}
			});
			setMessages(response.data);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user && inputText.trim()) {
			let newMsg = { text: inputText, user_id: user.id, username: user.username };
			axiosJWT.post('api/messages', newMsg, {
				headers: {
					authorization: `Bearer ${user.accessToken}`
				}
			});
			socket.emit('sendMessage', newMsg);
		}
		setInputText('');
	};

	const getUsers = async () => {
		try {
			if (user) {
				const response = await axiosJWT.get('api/users', {
					headers: {
						authorization: `Bearer ${user.accessToken}`
					}
				});
				setUsers(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	////////////////////////////////////
	const handleUser = (user) => {
		setUser(user);
	};

	const fetchRefreshToken = async () => {
		try {
			const response = await axios.get('/api/auth/refresh_token', {
				mode: 'cors',
				credentials: 'include'
			});
			setUser({
				...user,
				accessToken: response.data.accessToken,
				refreshToken: response.data.refreshToken
			});
			return response.data;
		} catch (error) {
			console.log(error);
		}
	};

	axiosJWT.interceptors.request.use(
		async (config) => {
			let currentDate = new Date();
			const decodedToken = jwt_decode(user.accessToken);
			if (decodedToken.exp * 1000 < currentDate.getTime()) {
				const data = await fetchRefreshToken();
				config.headers['authorization'] = `Bearer ${data.accessToken}`;
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
	return (
		<div>
			{user ? (
				<div>
					<TopBar user={user} handleUser={handleUser} />
					<div className="chat_container">
						<div className="chat-users">
							<div className="chat-users--header">
								{/* <img src="https://img.icons8.com/color-glass/48/000000/group.png" width="30" alt="users png" /> */}
								<h3>Users</h3>
							</div>
							{users.map((user) => {
								return <p key={user.id}>{user.username}</p>;
							})}
						</div>
						<div className="chat-message-box">
							<div className="chat-message-box__messages">
								{messages &&
									messages.map((msg, i) => {
										let currentUser = users.find((user) => user.id === msg.user_id);
										let userName = currentUser ? currentUser.username : '!';
										return (
											<div className="message_container" key={msg.id ? msg.id : `${user.username}-${i}`}>
												<strong className="username">{msg.username ? msg.username : userName}</strong>
												<div className="message"> {msg.text} </div>
											</div>
										);
									})}
							</div>
							<form className="send-message__container" onSubmit={handleSubmit}>
								<div className="send-message__input">
									<TextField
										id="full-width-text-field"
										placeholder="Type message"
										variant="outlined"
										fullWidth
										value={inputText}
										onChange={handleChange}
									/>
								</div>
								<IconButton type="submit" aria-label="send">
									<SendIcon />
								</IconButton>
							</form>
						</div>
					</div>
				</div>
			) : (
				<Redirect exact to="/login" />
			)}
			<Routes isLoggedOut={!user} handleUser={handleUser} />
		</div>
	);
}

export default Chat;
