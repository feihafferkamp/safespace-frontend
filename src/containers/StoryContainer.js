import React, { Component } from 'react';
import StoryList from '../components/StoryList';

export default class StoryContainer extends Component {
	state = { stories: [] };

	componentDidMount = () => {
		fetch('http://localhost:3000/stories')
			.then(res => res.json())
			.then(stories => this.setState({ stories }));
	};

	render() {
		return <StoryList stories={this.state.stories} />;
	}
}
