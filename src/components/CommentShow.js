import React from 'react';
import { Comment } from 'semantic-ui-react';

const CommentShow = props => {
	return (
		<Comment>
			<Comment.Content>
				<Comment.Author>{props.comment.username}</Comment.Author>
				<Comment.Text>{props.comment.content}</Comment.Text>
			</Comment.Content>
		</Comment>
	);
};

export default CommentShow;
