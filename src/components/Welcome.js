import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Header } from 'semantic-ui-react';
import '../stylesheets/static.css';

export default class Welcome extends Component {
	render() {
		return (
			<Container>
				<div className="contentContainer">
					<Header>
						<h1 id="welcome">Welcome to Safe Space</h1>
						<Header.Subheader>
							<h3>
								Please
								<Link to={'/login'}>
									<Button className="custom-btns">Login</Button>
								</Link>
								or
								<Link to={'/signup'}>
									<Button className="custom-btns">Sign Up</Button>
								</Link>
								to start.
							</h3>
						</Header.Subheader>
					</Header>
				</div>
			</Container>
		);
	}
}
