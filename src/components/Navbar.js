import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'


export default class Navbar extends Component {
	state = {	}

	handleItemClick = e => {
		this.setState({
			activeItem:e.target.name
		})
	}

	pages = [
		{
			name:'home',
			path:'/',
		},
		{
			name:'stories',
			path:'/stories'
		},
		{
			name:'new',
			path:'/new-story'
		},
		{
			name:'about',
			path:'/about'
		},
		{
			name:'contact',
			path:'/contact',
		}
	]

	render() {
		const { activeItem } = this.state
		const links = this.pages.map(page => {
			return <Menu.Item key={page.name} name={page.name} as={NavLink} exact to={page.path} active={activeItem === page.name} onClick={this.handleItemClick}/>

		})
		return (
			<Menu>
				{links}
			</Menu>
		)
	}
}
