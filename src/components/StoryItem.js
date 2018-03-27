import React, { Component } from 'react';
import { Card, Icon, Label, Container, List, Segment } from 'semantic-ui-react';
import CommentContainer from '../containers/CommentContainer';


export default class StoryItem extends Component {
	render() {
		const tags = this.props.story.tags.map(tag => {
			return <Label key={tag.id}>{tag.name}</Label>
		})
		return (
			<div className='story-item'>
				<Segment piled >
						<div>{this.props.story.content}</div>
						<div>
							<Icon name="user" />
							{this.props.story.user.username}
						</div>
						<CommentContainer
							comments={this.props.story.comments}
							storyId={this.props.story.id}
						/>
          <Label.Group tag color='teal'>
              {tags}
            </Label.Group>
				</Segment>
			</div>
		);
	}
}
