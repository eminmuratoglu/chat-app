import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

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

	// const handleChange = e => {
	//   if (e.currentTarget.name === 'username') {
	//     setUsername(e.currentTarget.value);
	//   } else {
	//     setPassword(e.currentTarget.value);
	//   }
	// };

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/api/auth/login', { username, password });
			setUser(response.data);
			console.log(response.data);
			setUsername('');
			setPassword('');
		} catch (err) {
			console.log(err);
		}
	};

	return !user || props.isLoggedOut ? (
		<div className="loginContainer">
			<h2>Login</h2>
			<form className="loginForm" onSubmit={handleLogin}>
				<label>Username</label>
				<input
					type="text"
					placeholder="username"
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Password</label>
				<input
					type="password"
					placeholder="password"
					name="username"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Login</button>
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
