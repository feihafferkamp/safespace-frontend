import React from 'react';
import { Comment, Grid, Icon } from 'semantic-ui-react';
import EditCommentForm from './EditCommentForm';
import '../stylesheets/comment.css';

class CommentCard extends React.Component {
	state = { editing: false };

	editComment = () => {
		this.setState({ editing: true });
	};

	handleCommentEdits = editedComment => {
		this.setState({ editing: false });
		this.props.patchComment(editedComment);
	};

	showEditOption = () =>
		this.props.comment.username === this.props.user.username ? (
			<Grid.Column width={3}>
				<a role="button" onClick={this.editComment}>
					<Icon link name="edit" />
				</a>
			</Grid.Column>
		) : null;

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
						{this.showEditOption()}
					</Grid.Row>
				</Grid>
			</Comment.Content>
		);
	}
}

export default CommentCard;
