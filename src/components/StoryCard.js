import React, { Component } from 'react';
import { Card, Icon, Comment, Form, Button } from 'semantic-ui-react';
import CommentShow from './CommentShow';

export default class StoryCard extends Component {
	state = { comment: { username: '', content: '' } };

	handleInputChange = e => {
		this.setState({
			comment: { ...this.state.comment, [e.target.name]: e.target.value }
		});
	};

	handleCommentSubmit = e => {
		e.preventDefault();
		this.postComment();
	};

	postComment = () => {
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({})
		};
	};

	render() {
		const comments = this.props.story.comments.map(comment => {
			return <CommentShow comment={comment} key={comment.id} />;
		});

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
				<Comment.Group>
					{comments}
					<Form onSubmit={this.handleCommentSubmit}>
						<Form.TextArea
							name="content"
							value={this.state.newComment}
							onChange={this.handleCommentChange}
						/>
						<Form.Field>
							<input
								onChange={this.handleInputChange}
								name="username"
								placeholder="Your Username"
							/>
						</Form.Field>
						<Button type="submit" content="Submit" />
					</Form>
				</Comment.Group>
			</div>
		);
	}
}
