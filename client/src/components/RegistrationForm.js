import { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

function RegistrationForm() {
	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<div className="registrationContainer">
			<h2>Registration</h2>
			<form className="registrationForm">
				<label>Username</label>
				<input type="text" />
				<label>Password</label>
				<input type="password" />
				<button type="submit">Register</button>
			</form>
		</div>
	);
}

export default RegistrationForm;
