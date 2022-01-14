// import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TopBar(props) {
	const [ user, setUser ] = useState(props.user);

	useEffect(
		() => {
			props.handleUser(user);
		},
		[ user ]
	);

	const logout = () => {
		deleteToken();
		setUser(null);
	};

	const deleteToken = async () => {
		const response = await axios.delete('/api/auth/logout');
		console.log(response.data.message);
		return response;
	};

	return (
		<AppBar>
			<Toolbar style={{ backgroundColor: 'rgb(100,150,90' }}>
				<Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
					<img
						width="40"
						src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-chat-multimedia-kiranshastry-gradient-kiranshastry.png"
					/>
				</Typography>
				<Typography style={{ fontWeight: 'lighter' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{user && `Welcome, ${user.username}`}
				</Typography>

				<Button color="inherit" onClick={logout}>
					<img width="35" src="https://img.icons8.com/fluency/48/000000/shutdown.png" />
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
}
export default TopBar;
