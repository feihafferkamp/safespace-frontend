import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Header } from 'semantic-ui-react';
import '../stylesheets/static.css';

export default class Welcome extends Component {
	render() {
		return (
			<Container>
				<div className="content-container">
					<Header>
						<h1 id="welcome">Welcome to Safe Space</h1>
						<Link to={'/login'}>
							<Button className="custom-btns">Login</Button>
						</Link>
						<Link to={'/signup'}>
							<Button className="custom-btns">Sign Up</Button>
						</Link>
					</Header>
				</div>
			</Container>
		);
	}
}
