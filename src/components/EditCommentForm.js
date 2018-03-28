import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import '../stylesheets/comment.css';

export default class EditCommentForm extends Component {
	state = { comment: Object.assign(this.props.comment) };

	handleInputChange = e => {
		this.setState({
			comment: { ...this.state.comment, [e.target.name]: e.target.value }
		});
	};

	handleCommentSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state);
	};

	render() {
		return (
			<Form onSubmit={this.handleCommentSubmit}>
				<Form.TextArea
					name="content"
					value={this.state.comment.content}
					onChange={this.handleInputChange}
				/>
				<Button type="submit" content="Done" />
			</Form>
		);
	}
}
