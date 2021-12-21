import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Routes from './components/Routes';
import axios from 'axios';
import { io } from 'socket.io-client';
import './App.css';

function App() {
	const [ messages, setMessages ] = useState([]);
	const [ users, setUsers ] = useState([]);
	const [ user, setUser ] = useState(null);
	const [ inputText, setInputText ] = useState('');

	const [ secret, setSecret ] = useState('');

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

	const addMessage = () => {
		if (user && inputText.trim()) {
			let newMsg = { text: inputText, user_id: user.id };
			axiosJWT.post('api/messages', newMsg, {
				headers: {
					authorization: `Bearer ${user.accessToken}`
				}
			});
		}
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
		addMessage();
		setInputText('');
		getMessages();
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

	const getSecretData = async () => {
		try {
			const res = await axiosJWT.get('/secret', {
				headers: {
					authorization: `Bearer ${user.accessToken}`
				}
			});
			setSecret(res.data);
			console.log(user);
		} catch (error) {
			setSecret('not allowed');
			console.log('error occured :(', error);
			console.log(user);
		}
	};

	return (
		<div className="App">
			<h1>chat app</h1>
			<button onClick={getSecretData}>Get Secret Data</button>
			<p>{secret}</p>
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
							{messages.map((msg) => {
								let currentUser = users.find((user) => user.id === msg.user_id);
								let userName = currentUser ? currentUser.username : 'user';
								return (
									<p key={msg.id}>
										<strong>{userName}</strong>: {msg.text}
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
				<Redirect exact to="/login" /> //
			)}
			<Routes handleUser={handleUser} />
		</div>
	);
}

export default App;
