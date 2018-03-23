import React, { Component } from 'react';
import Welcome from '../components/Welcome';
import Navbar from '../components/Navbar';
import StoryContainer from './StoryContainer';
import NewStoryContainer from './NewStoryContainer';
import { Route, Switch } from 'react-router-dom';

export default class Page extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route path="/new-story" component={NewStoryContainer} />
					<Route path="/stories" component={StoryContainer} />
					<Route path="/" component={Welcome} />
				</Switch>
			</div>
		);
	}
}
