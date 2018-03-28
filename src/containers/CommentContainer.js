import React, { Component } from 'react';
import { Comment, Icon } from 'semantic-ui-react';
import CommentCard from '../components/CommentCard';
import NewCommentForm from '../components/NewCommentForm';

export default class CommentContainer extends Component {
	state = { comments: [], open: false };

	componentDidMount() {
		this.fetchComments();
	}

	fetchComments = () => {
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			}
		};
		fetch(
			`http://localhost:3000/stories/${this.props.storyId}/comments`,
			options
		)
			.then(res => res.json())
			.then(comments => this.setState({ comments }));
	};

	postNewComment = newCommentInfo => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			},
			body: JSON.stringify(newCommentInfo)
		};
		fetch(
			`http://localhost:3000/stories/${this.props.storyId}/comments`,
			options
		)
			.then(res => res.json())
			.then(newComJson => this.fetchComments());
	};

	patchComment = editedComment => {
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			},
			body: JSON.stringify(editedComment)
		};
		fetch(
			`http://localhost:3000/stories/${this.props.storyId}/comments/${
				editedComment.comment.id
			}`,
			options
		)
			.then(res => res.json())
			.then(editedComJson => this.fetchComments());
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
			<CommentCard
				patchComment={this.patchComment}
				comment={c}
				key={c.id}
				handleShow={this.setShow}
				user={this.props.user}
			/>
		));

	generateCommentCards = () =>
		this.state.open ? (
			<div>
				<Comment>{this.commentCards()}</Comment>
				<NewCommentForm
					submitComment={this.postNewComment}
					handleClose={this.toggleOpen}
					user={this.props.user}
				/>
			</div>
		) : (
			<a role="button" onClick={this.toggleOpen}>
				<Icon name="comment" /> Comments ({this.state.comments.length})
			</a>
		);

	render() {
		return <Comment.Group>{this.generateCommentCards()}</Comment.Group>;
	}
}
