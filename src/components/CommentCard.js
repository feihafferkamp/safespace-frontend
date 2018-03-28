import React from 'react';
import { Comment, Grid } from 'semantic-ui-react';
import EditCommentForm from './EditCommentForm';
import '../stylesheets/comment.css';

class CommentCard extends React.Component {
	state = { editing: false };

	editComment = () => {
		this.setState({ editing: true });
	};

	render() {
		return this.state.editing ? (
			<EditCommentForm comment={this.props.comment} />
		) : (
			<Comment.Content className="comment-content">
				<Grid column={2}>
					<Comment.Author>{this.props.comment.username}</Comment.Author>
					<Grid.Row>
						<Grid.Column width={13}>
							<Comment.Text>{this.props.comment.content}</Comment.Text>
						</Grid.Column>
						<Grid.Column width={3}>
							<a role="button" onClick={this.editComment}>
								Edit
							</a>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Comment.Content>
		);
	}
}

export default CommentCard;
