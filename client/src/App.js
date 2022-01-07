import { useState, useEffect } from 'react';
import Chat from './components/Chat';
import axios from 'axios';
import './App.css';

function App() {
	return (
		<div className="App">
			<h1>chat app</h1>
			<Chat />
		</div>
	);
}

export default App;

// const getSecretData = async () => {
// 	try {
// 		const res = await axiosJWT.get('/secret', {
// 			headers: {
// 				authorization: `Bearer ${user.accessToken}`
// 			}
// 		});
// 		setSecret(res.data);
// 		console.log(user);
// 	} catch (error) {
// 		setSecret('not allowed');
// 		console.log('error occured :(', error);
// 		console.log(user);
// 	}
// };
