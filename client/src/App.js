import { useState } from 'react';
import './App.css';

function App() {
	const data = {
		messages: [
			{ name: 'Jhon', text: 'Hello from Jhon', created_at: 'date' },
			{ name: 'Marie', text: 'Hello from Marie', created_at: 'date' }
		]
	};
	const [ messages, setMessages ] = useState(data.messages);
	const [ inputText, setInputText ] = useState('');

	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputText.trim() !== '') {
			let newMsg = { name: 'You', text: inputText };
			setMessages((prev) => {
				return [ ...prev, newMsg ];
			});
		}
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

// renderMessage = (user, msg) => {
//   return <p>{user.name}: {msg}</p>
// }
