import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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

	// render users/messages only after user logs in
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

	const logout = () => {
		deleteToken();
		setUser(null);
	};

	const deleteToken = async () => {
		const response = await axios.delete('/api/auth/logout');
		console.log(response.data.message);
		return response;
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
				<div className="chat_container">
					<div className="chat-users">
						<h4>Welcome, {user.username}</h4>
						<h3>Users</h3>
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
										<p key={msg.id ? msg.id : `${user.username}-${i}`}>
											<strong>{msg.username ? msg.username : userName}</strong>: {msg.text}
										</p>
									);
								})}
						</div>
						<form onSubmit={handleSubmit}>
							<input type="text" value={inputText} onChange={handleChange} />
							<button type="submit">Send</button>
						</form>
					</div>
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				<Redirect exact to="/login" />
			)}
			<Routes isLoggedOut={!user} handleUser={handleUser} />
		</div>
	);
}

export default Chat;
