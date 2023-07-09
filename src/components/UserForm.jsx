import React, { useState } from 'react';

function UserForm() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const [formErrors, setFormErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value }); // update the form data state
		validateField(name, value); // validate the input field
	}

	const validateField = (name, value) => {
		let errors = { ...formErrors };

		switch (name) {
			case 'firstName':
				if (!value) {
					errors.firstName = 'First name is required';
				} else if (!/^[a-zA-Z]+$/.test(value)) {
					errors.firstName = 'First name must contain only letters';
				} else if (value.length < 2) {
					errors.firstName = 'First name must be at least 2 characters long';
				} else {
					errors.firstName = '';
				}
				break;
			case 'lastName':
				if (!value) {
					errors.lastName = 'Last name is required';
				} else if (!/^[a-zA-Z]+$/.test(value)) {
					errors.lastName = 'Last name must contain only letters';
				} else if (value.length < 2) {
					errors.lastName = 'Last name must be at least 2 characters long';
				} else {
					errors.lastName = '';
				}
				break;
			case 'email':
				if (!value) {
					errors.email = 'Email is required';
				} else if (value.length < 5) {
					errors.email = 'Email must be at least 5 characters long';
				} else {
					errors.email = '';
				}
				break;
			case 'password':
				if (!value) {
					errors.password = 'Password is required';
				} else if (value.length < 8) {
					errors.password = 'Password must be at least 8 characters long';
				} else {
					errors.password = '';
				}
				if (value !== formData.confirmPassword) {
					errors.confirmPassword = 'Passwords do not match';
				} else {
					errors.confirmPassword = '';
				}
				break;
			case 'confirmPassword':
				if (!value) {
					errors.confirmPassword = 'Confirm password is required';
				} else if (value.length < 8) {
					errors.confirmPassword = 'Confirm password must be at least 8 characters long';
				} else if (value !== formData.password) {
					errors.confirmPassword = 'Passwords do not match';
				} else {
					errors.confirmPassword = '';
				}
				break;
			default:
				break;
		}

		setFormErrors(errors);
	}

	return (
		<form>
			<div>
				<label>First Name:</label>
				<input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
				{formErrors.firstName && <p style={{ color: 'red' }}>{formErrors.firstName}</p>}
			</div>
			<div>
				<label>Last Name:</label>
				<input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
				{formErrors.lastName && <p style={{ color: 'red' }}>{formErrors.lastName}</p>}
			</div>
			<div>
				<label>Email Address:</label>
				<input type="text" name="email" value={formData.email} onChange={handleInputChange} />
				{formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
			</div>
			<div>
				<label>Password:</label>
				<input type="password" name="password" value={formData.password} onChange={handleInputChange} />
				{formErrors.password && <p style={{ color: 'red' }}>{formErrors.password}</p>}
			</div>
			<div>
				<label>Confirm Password:</label>
				<input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
				{formErrors.confirmPassword && <p style={{ color: 'red' }}>{formErrors.confirmPassword}</p>}
			</div>
		</form>
	);
}

export default UserForm;