import { useState, useEffect } from 'react';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import axios from 'axios';
import './App.css';

function App() {
	const [ messages, setMessages ] = useState([]);
	const [ users, setUsers ] = useState([]);
	const [ user, setUser ] = useState(null);
	const [ inputText, setInputText ] = useState('');

	useEffect(() => {
		getMessages();
		getUsers();
	}, []);

	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const addMessage = () => {
		if (inputText.trim() !== '') {
			let newMsg = { text: inputText };
			axios.post('api/messages', newMsg);
		}
	};

	const getMessages = async () => {
		const response = await axios.get('api/messages');
		setMessages(response.data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addMessage();
		setInputText('');
		getMessages();
	};

	const getUsers = async () => {
		const response = await axios.get('api/users');
		setUsers(response.data);
	};
	////////////////////////////////////
	const handleUser = (user) => {
		setUser(user);
	};

	// const refreshToken = async () => {
	// 	try {
	// 		const response = axios.get('/api/auth/refresh_token')
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	const fetchRefreshToken = async () => {
		const res = await fetch('api/auth/refresh_token', {
			headers: {
				'Content-Type': 'application/json'
			},
			mode: 'cors',
			credentials: 'include'
		});
		const jsonResponse = await res.json();
		// return jsonResponse;
		setUser({
			...user,
			accessToken: jsonResponse.accessToken,
			refreshToken: jsonResponse.refreshToken
		});
	};

	return (
		<div className="App">
			<h1>chat app</h1>

			{user ? (
				<div className="chat_container">
					<div className="chat-users">
						<h3>Users</h3>
						<p>Welcome, {user.username}</p>
						{users.map((user) => {
							return <p key={user.id}>{user.username}</p>;
						})}
					</div>
					<div className="chat-message-box">
						<div className="chat-message-box__messages">
							{messages.map((msg) => {
								return (
									<p key={msg.id}>
										{/* <strong>{users.find((user) => user.id === 1)['username'] + ':'} </strong> {msg.text} */}
										<strong>You: </strong> {msg.text}
									</p> // will use the user_id from messages to find correct user of the message
								);
							})}
						</div>
						<form onSubmit={handleSubmit}>
							<input type="text" value={inputText} onChange={handleChange} />
							<button type="submit">Send</button>
						</form>
					</div>
					<button>Logout</button>
				</div>
			) : (
				<LoginForm handleUser={handleUser} />
				/* <RegistrationForm /> */
			)}
		</div>
	);
}

export default App;
