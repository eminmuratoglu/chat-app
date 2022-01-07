import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

function Routes(props) {
	return (
		<Switch>
			<Route exact path="/register" render={() => <RegistrationForm isLoggedOut={props.isLoggedOut} />} />
			<Route
				exact
				path="/login"
				render={() => <LoginForm isLoggedOut={props.isLoggedOut} handleUser={props.handleUser} />}
			/>
		</Switch>
	);
}

export default Routes;
