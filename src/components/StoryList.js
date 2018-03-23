import React, { Component } from 'react';
import StoryCard from './StoryCard';

export default class StoryList extends Component {
	render() {
		const storyCards = this.props.stories.map(s => (
			<StoryCard story={s} key={s.id} />
		));
		return <div>{storyCards}</div>;
	}
}
