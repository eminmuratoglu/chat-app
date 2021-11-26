import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [ messages, setMessages ] = useState([]);
	const [ users, setUsers ] = useState([]);
	const [ inputText, setInputText ] = useState('');

	useEffect(() => {
		renderMessages();
		getUsers();
	}, []);

	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const renderMessages = async () => {
		const response = await axios.get('api/messages');
		setMessages(response.data);
	};

	const addMessage = () => {
		if (inputText.trim() !== '') {
			let newMsg = { username: 'You', text: inputText };
			axios.post('api/messages', newMsg);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addMessage();
		setInputText('');
		renderMessages();
	};

	const getUsers = async () => {
		const response = await axios.get('api/users');
		setUsers(response.data);
	};

	return (
		<div className="App">
			<h1>chat app</h1>
			<div className="chat_container">
				<div className="chat-users">
					<h3>Users</h3>
					{users.map((user) => {
						return <p key={user.id}>{user.username}</p>;
					})}
				</div>
				<div className="chat-message-box">
					<div className="chat-message-box__messages">
						{messages.map((msg) => {
							return (
								<p key={msg.id}>
									<strong>{msg.username}:</strong> {msg.text}
								</p>
							);
						})}
					</div>
					<form onSubmit={handleSubmit}>
						<input type="text" value={inputText} onChange={handleChange} />
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
