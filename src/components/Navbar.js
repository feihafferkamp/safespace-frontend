import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button, Dropdown, Icon } from 'semantic-ui-react';
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
		const logoutButton = (
			<Menu.Item>
				<Button animated onClick={this.props.handleLogout}>
					<Button.Content visible>Log Out</Button.Content>
					<Button.Content hidden>
						<Icon name="sign out" />
					</Button.Content>
				</Button>
			</Menu.Item>
		);
		return (
			<Menu size="large" className="secondary">
				{links}
				<Dropdown text="Stories" pointing className="link item my-nav-items">
					<Dropdown.Menu>
						<Dropdown.Item
							className="my-nav-items"
							as={NavLink}
							exact
							to="/stories">
							Map
						</Dropdown.Item>
						<Dropdown.Item as={NavLink} exact to="/feed">
							Feed
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				{this.props.user ? <Menu.Menu position="right">
					<Menu.Item as={NavLink} to="/profile" className="my-nav-items">
						{this.props.user.username}
					</Menu.Item>
					{logoutButton}
				</Menu.Menu>
				: null}
			</Menu>
		);
	}
}
