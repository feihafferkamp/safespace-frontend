import React, { Component } from 'react';
import StoryCard from './StoryCard';
import { Card } from 'semantic-ui-react'

export default class StoryList extends Component {
	render() {
		const storyCards = this.props.stories.map(s => (
			<StoryCard story={s} key={s.id} />
		));
		return (
			<Card.Group>{storyCards}</Card.Group>
		)
	}
}
