import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button, Icon } from 'semantic-ui-react';
import '../stylesheets/navbar.css';

export default class Navbar extends Component {
	state = {};

	handleItemClick = e => {
		this.setState({
			activeItem: e.target.name
		});
	};

	pages = [
		{
			name: 'home',
			path: '/'
		},
		{
			name: 'stories',
			path: '/stories'
		},
		{
			name: 'new',
			path: '/new-story'
		},
		{
			name: 'about',
			path: '/about'
		},
		{
			name: 'contact',
			path: '/contact'
		}
	];

	render() {
		const { activeItem } = this.state;
		const links = this.pages.map(page => {
			return (
				<Menu.Item
					key={page.name}
					name={page.name}
					as={NavLink}
					exact
					to={page.path}
					active={activeItem === page.name}
					onClick={this.handleItemClick}
					className="my-nav-items"
				/>
			);
		});
		return (
			<Menu size="large" className="secondary">
				{links}
				<Menu.Item>
					{this.props.isLoggedIn ? (
						<Button animated onClick={this.props.handleLogout}>
							<Button.Content visible>Log Out</Button.Content>
							<Button.Content hidden>
								<Icon name="sign out alternate" />
							</Button.Content>
						</Button>
					) : null}
				</Menu.Item>
			</Menu>
		);
	}
}
