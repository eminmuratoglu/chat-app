import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Forms.css';
import webChatImg from './images/web-chat.png';

function LoginForm(props) {
	const [ user, setUser ] = useState(null);
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	// const [ error, setError ] = useState(false);
	// const [ success, setSuccess ] = useState(false);

	useEffect(
		() => {
			props.handleUser(user);
		},
		[ user ]
	);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/api/auth/login', { username, password });
			setUser(response.data);
			console.log(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	return !user || props.isLoggedOut ? (
		<div className="home__container">
			<img src={webChatImg} alt="web-chat" />
			<form className="home__container--form" onSubmit={handleLogin}>
				<h2 className="home__container--form-header">💬 Login</h2>
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
					Login
				</Button>
				<p>
					Don't have an account yet?{' '}
					<NavLink exact to="/register">
						Register
					</NavLink>
				</p>
			</form>
		</div>
	) : null;
}

export default LoginForm;
