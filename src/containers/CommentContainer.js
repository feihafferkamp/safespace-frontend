import React from 'react';
import CommentShow from '../components/CommentShow';
import CommentForm from '../components/CommentForm';
import { Comment } from 'semantic-ui-react';

class CommentContainer extends React.Component {
	state = { comments: this.props.comments };

	postComment = newCommentInfo => {
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(newCommentInfo)
		};
		fetch(
			`http://localhost:3000/stories/${this.props.storyId}/comments`,
			options
		)
			.then(res => res.json())
			.then(json => this.addToState(json));
	};

	addToState = json => {
		const newComment = {
			id: json.id,
			content: json.content,
			created_at: json.created_at,
			username: json.username
		};
		this.setState({
			comments: [...this.state.comments, newComment]
		});
	};

	render() {
		console.log(this.state.comments);
		const commentShows = this.state.comments.map(c => {
			return <CommentShow comment={c} key={c.id} />;
		});

		return (
			<Comment.Group>
				{commentShows}
				<CommentForm submitComment={this.postComment} />
			</Comment.Group>
		);
	}
}

export default CommentContainer;
