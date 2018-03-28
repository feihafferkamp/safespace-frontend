import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import CommentContainer from '../containers/CommentContainer';
import '../stylesheets/story.css';

export default class StoryCard extends Component {
	render() {
		return (
			<div>
				<Card>
					<Card.Content>
						<Card.Description>{this.props.story.content}</Card.Description>
						<Card.Meta>
							<Icon name="user" />
							{this.props.story.user.username}
						</Card.Meta>
					</Card.Content>
				</Card>
				<CommentContainer
					// user={this.props.user}
					comments={this.props.story.comments}
					storyId={this.props.story.id}
				/>
			</div>
		);
	}
}
