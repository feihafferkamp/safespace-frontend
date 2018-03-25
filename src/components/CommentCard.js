import React from 'react';
import { Comment } from 'semantic-ui-react';

const CommentCard = props => {
	return (
		<Comment.Content>
			<Comment.Author>{props.comment.username}</Comment.Author>
			<Comment.Text>{props.comment.content}</Comment.Text>
		</Comment.Content>
	);
};

export default CommentCard;
