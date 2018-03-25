import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import CommentContainer from '../containers/CommentContainer';

export default class StoryCard extends Component {
	render() {
		return (
			<Card>
				<Card.Content>
					<Card.Description>{this.props.story.content}</Card.Description>
					<Card.Meta>
						<Icon name="user" />
						{this.props.story.user.username}
					</Card.Meta>
				</Card.Content>
				<Card.Content extra>
					<CommentContainer
						comments={this.props.story.comments}
						storyId={this.props.story.id}
					/>
				</Card.Content>
			</Card>
		);
	}
}
