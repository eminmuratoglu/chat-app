import { useState, useEffect } from 'react';
import Chat from './components/Chat';
import axios from 'axios';

function App() {
	return (
		<div className="App">
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
