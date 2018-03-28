import React, { Component } from 'react';
import { Comment, Grid, Icon } from 'semantic-ui-react';
import EditCommentForm from './EditCommentForm';
import '../stylesheets/comment.css';

export default class CommentCard extends Component {
	state = { editing: false };

	editComment = () => {
		this.setState({ editing: true });
	};

	handleCommentEdits = editedComment => {
		this.setState({ editing: false });
		this.props.patchComment(editedComment);
	};

	render() {
		return this.state.editing ? (
			<EditCommentForm
				comment={this.props.comment}
				onSubmit={this.handleCommentEdits}
			/>
		) : (
			<Comment.Content className="comment-content">
				<Grid column={2}>
					<Comment.Author>{this.props.comment.username}</Comment.Author>
					<Grid.Row>
						<Grid.Column width={13}>
							<Comment.Text>{this.props.comment.content}</Comment.Text>
						</Grid.Column>
						// only see if
						<Grid.Column width={3}>
							<a role="button" onClick={this.editComment}>
								<Icon link name="edit" />
							</a>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Comment.Content>
		);
	}
}
