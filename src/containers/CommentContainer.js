import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';
import CommentCard from '../components/CommentCard';
import CommentForm from '../components/CommentForm';

export default class CommentContainer extends React.Component {
	state = { comments: this.props.comments, open: false };

	postComment = newCommentInfo => {
		const options = {
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
			.then(json => this.addNewCommentToState(json));
	};

	addNewCommentToState = ({ id, content, created_at, username }) => {
		this.setState({
			comments: [...this.state.comments, { id, content, created_at, username }]
		});
	};

	toggleOpen = () => {
		this.setState({ open: !this.state.open });
	};

	commentCards = () =>
		this.state.comments.map(c => (
			<CommentCard comment={c} key={c.id} handleShow={this.setShow} />
		));

	generateDisplay = () =>
		this.state.open ? (
			<div>
				<Comment>{this.commentCards()}</Comment>
				<CommentForm
					submitComment={this.postComment}
					handleClose={this.toggleOpen}
				/>
			</div>
		) : (
			<a role="button" onClick={this.toggleOpen}>
				<Icon name="comment" /> Comments ({this.state.comments.length})
			</a>
		);

	render() {
		return <Comment.Group>{this.generateDisplay()}</Comment.Group>;
	}
}
