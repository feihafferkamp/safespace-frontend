import React from 'react';
import { Grid } from 'semantic-ui-react';
import StoryItem from './StoryItem';
import StoryFilter from './StoryFilter';
import '../stylesheets/item.css';

export default class StoryList extends React.Component {
	state = {
		filter: '',
		sort: ''
	};

	setFilter = filter => {
		this.setState({ filter });
	};

	render() {
		const storyCards = this.props.stories.map(story => {
			return <StoryItem story={story} key={story.id} />;
		});
		return (
			<div className="story-container">
				<StoryFilter handleChange={this.setFilter} />
				<Grid columns={3} stackable>
					{storyCards}
				</Grid>
			</div>
		);
	}
}
