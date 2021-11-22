import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [ messages, setMessages ] = useState([]);
	const [ inputText, setInputText ] = useState('');

	useEffect(() => {
		console.log('in useEffect');
		renderMessages();
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
			let newMsg = { name: 'You', text: inputText };
			axios.post('api/messages', newMsg);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addMessage();
		setInputText('');
	};
	return (
		<div className="App">
			<h1>chat app</h1>
			{messages.map((user, i) => {
				return (
					<p key={i}>
						<strong>{user.name}:</strong> {user.text}
					</p>
				);
			})}
			<form onSubmit={handleSubmit}>
				<input type="text" value={inputText} onChange={handleChange} />
				<button type="submit">Send</button>
			</form>
		</div>
	);
}

export default App;
