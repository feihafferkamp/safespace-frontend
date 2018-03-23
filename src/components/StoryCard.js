import React, { Component } from 'react';
import { Card, Icon, Comment } from 'semantic-ui-react'

export default class StoryCard extends Component {
	render() {
		console.log(this.props.story)
		const comments = this.props.story.comments.map(comment => {
			return (
				<Comment>
					<Comment.Content>
						<Comment.Author></Comment.Author>
						<Comment.Text>{comment.content}</Comment.Text>
					</Comment.Content>
				</Comment>
			)
		})
		console.log(comments)
		return (
			<div>
				<Card>
					<Card.Content>
						<Card.Description>{this.props.story.content}</Card.Description>
						<Card.Meta> <Icon name='user' />{this.props.story.user.username}</Card.Meta>
					</Card.Content>
				</Card>
				<Comment.Group>
					{comments}
				</Comment.Group>
			</div>
		)
	}
}
