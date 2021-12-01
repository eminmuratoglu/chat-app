import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [ messages, setMessages ] = useState([]);
	const [ users, setUsers ] = useState([]);
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
									<strong>{users.find((user) => user.id === 1)['username'] + ':'} </strong> {msg.text}
								</p> // will use the user_id from messages to find correct user of the message
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
