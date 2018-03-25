import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class CommentForm extends Component {
	state = { comment: { username: '', content: '' } };

	handleInputChange = e => {
		this.setState({
			comment: { ...this.state.comment, [e.target.name]: e.target.value }
		});
	};

	handleCommentSubmit = e => {
		e.preventDefault();
		this.props.submitComment(this.state);
		this.setState({ comment: { username: '', content: '' } });
	};

	render() {
		return (
			<Form onSubmit={this.handleCommentSubmit}>
				<Form.TextArea
					name="content"
					value={this.state.comment.content}
					placeholder="Your comment here..."
					onChange={this.handleInputChange}
				/>
				<Form.Field>
					<input
						name="username"
						value={this.state.comment.username}
						placeholder="Your Username"
						onChange={this.handleInputChange}
					/>
				</Form.Field>
				<Button type="submit" content="Submit" />
				<a href="#" onClick={this.props.handleCollapose}>
					Collapse
				</a>
			</Form>
		);
	}
}
