import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NewStoryContainer from './NewStoryContainer';
import StoryContainer from './StoryContainer';
import Welcome from '../components/Welcome';
import { Route, Switch } from 'react-router-dom';

// import StoryContainer from './StoryContainer';

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
