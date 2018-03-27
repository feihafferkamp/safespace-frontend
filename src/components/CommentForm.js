import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class CommentForm extends Component {
	state = { content: '' }

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleCommentSubmit = e => {
		e.preventDefault();
		this.props.submitComment({comment: {content:this.state.content, username:this.props.user.username}});
		this.setState({ content:'' });
	};

	render() {
		return (
			<Form onSubmit={this.handleCommentSubmit}>
				<Form.TextArea
					name="content"
					value={this.state.content}
					placeholder="Your comment here..."
					onChange={this.handleInputChange}
				/>
				<Button type="submit" content="Submit" />
				<a role="button" onClick={this.props.handleClose}>
					Close
				</a>
			</Form>
		);
	}
}
