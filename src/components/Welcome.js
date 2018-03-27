import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Icon, Header } from 'semantic-ui-react';
import '../stylesheets/static.css';
import bgVid from '../media/bgVid.mp4';

export default class Welcome extends Component {
	render() {
		console.log(bgVid)
		return (
			<Container>
				<video className="bgVid" autoPlay loop muted>
					<source src={bgVid} type="video/mp4" />
				</video>
				<div className="contentContainer">
					<Header as="h2">
						<h1 id="welcome">Welcome to Safe Space</h1>
						<Header.Subheader>
							<Link to={'/login'}>
								<Button className="custom-btns">Login</Button>
							</Link>
							<Link to={'/signup'}>
								<Button className="custom-btns">Sign Up</Button>
							</Link>
						</Header.Subheader>
					</Header>
				</div>
			</Container>
		);
	}
}
