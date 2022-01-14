import { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Forms.css';
import webChatImg from './images/web-chat.png';

function RegistrationForm({ isLoggedOut }) {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ registrationSuccess, setRegistrationSuccess ] = useState(!isLoggedOut);

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('/api/users', { username, password });
			console.log(res.data);
			setRegistrationSuccess(true);
			return res;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		// <div className="registrationContainer">
		// 	<h2>Registration</h2>
		// 	<form className="registrationForm" onSubmit={handleRegister}>
		// 		<label>Username</label>
		// 		<input
		// 			type="text"
		// 			placeholder="username"
		// 			name="username"
		// 			value={username}
		// 			onChange={(e) => setUsername(e.target.value)}
		// 		/>
		// 		<label>Password</label>
		// 		<input
		// 			type="password"
		// 			placeholder="password"
		// 			name="username"
		// 			value={password}
		// 			onChange={(e) => setPassword(e.target.value)}
		// 		/>
		// 		<button type="submit">Register</button>
		// 		<p>
		// 			Already have an account?{' '}
		// 			<NavLink exact to="/login">
		// 				Log in
		// 			</NavLink>
		// 		</p>
		// 		{registrationSuccess ? <Redirect exact to="/login" /> : null}
		// 	</form>
		// </div>
		<div className="home__container">
			<img src={webChatImg} alt="web-chat" />
			<form className="home__container--form" onSubmit={handleRegister}>
				<h2 className="home__container--form-header">Register</h2>
				<TextField
					required
					id="outlined"
					label="Username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField
					required
					id="outlined-password-input"
					label="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button variant="contained" color="primary" type="submit">
					Register
				</Button>
				<p>
					Already have an account?{' '}
					<NavLink exact to="/login">
						Log in
					</NavLink>
				</p>
				{registrationSuccess ? <Redirect exact to="/login" /> : null}
			</form>
		</div>
	);
}

export default RegistrationForm;
