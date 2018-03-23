import React from 'react'
import CommentShow from '../components/CommentShow'
import {Comment, Form, Button} from 'semantic-ui-react'

class CommentContainer extends React.Component {
  state = { comment: { username: '', content: '' } };

  handleInputChange = e => {
		this.setState({
			comment: { ...this.state.comment, [e.target.name]: e.target.value }
		});
	};

  handleCommentSubmit = e => {
		e.preventDefault();
		this.postComment();
	};

	postComment = () => {
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(this.state)
		};
		fetch(`http://localhost:3000/stories/${this.props.storyId}/comments`, options)
			.then(res => res.json())
			.then(json => console.log(json))
	};

  render() {

    const comments = this.props.comments.map(comment => {
			return <CommentShow comment={comment} key={comment.id} />;
		});

    return(
      <Comment.Group>
        {comments}
        <Form onSubmit={this.handleCommentSubmit}>
          <Form.TextArea
            name="content"
            value={this.state.comment.content}
            onChange={this.handleInputChange}
          />
          <Form.Field>
            <input
              onChange={this.handleInputChange}
              name="username"
              placeholder="Your Username"
            />
          </Form.Field>
          <Button type="submit" content="Submit" />
        </Form>
      </Comment.Group>
    )
  }
}

export default CommentContainer
