import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

function Routes(props) {
	return (
		<Switch>
			<Route exact path="/register" render={() => <RegistrationForm />} />
			<Route exact path="/login" render={() => <LoginForm handleUser={props.handleUser} />} />
		</Switch>
	);
}

export default Routes;
