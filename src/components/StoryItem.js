import React, { Component } from 'react';
import { Icon, Label, Segment } from 'semantic-ui-react';
import CommentContainer from '../containers/CommentContainer';

export default class StoryItem extends Component {

	handleClick = () => {
		this.props.iconClick(this.props.story)
	}
	render() {
		const tags = this.props.story.tags.map(tag => {
			return <Label key={tag.id}>{tag.name}</Label>;
		});
		return (
			<div className="story-item">
				<Segment piled>
					{this.props.editable ? <Icon link onClick={this.handleClick} name='edit' /> : null}
					<div>{this.props.story.content}</div>
					<div>
						<Icon name="user" />
						{this.props.story.user.username}
					</div>
					<CommentContainer
						comments={this.props.story.comments}
						storyId={this.props.story.id}
						user={this.props.user}
					/>
					<Label.Group tag color="teal">
						{this.props.story.tags ? tags : null}
					</Label.Group>

				</Segment>
			</div>
		);
	}
}
