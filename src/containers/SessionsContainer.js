import React from 'react';
import { Form, Button, Container, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/sessions.css';

export default class SessionsContainer extends React.Component {
	state = {
		username: '',
		password: ''
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault()
		this.props.createUser(this.state)
	}

	render() {
		return (
			<Container>
				<h1>Sign Up</h1>
				<Segment raised padded>
					<Form onSubmit={this.handleSubmit}>
						<label>Username</label>
						<Form.Input
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<label>Password</label>
						<Form.Input
							name="password"
							type="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					<Button primary type="submit">
							Sign Up
						</Button>
					</Form>
					<div className="centered-text">
						<NavLink exact to="/login">
							or, Login
						</NavLink>
					</div>
				</Segment>
			</Container>
		);
	}
}
