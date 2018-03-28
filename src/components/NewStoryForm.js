import React, { Component } from 'react';
import NewTagForm from './NewTagForm';
import {
	Form,
	TextArea,
	Button,
	Segment,
	Message,
	Label,
	Icon
} from 'semantic-ui-react';
import '../stylesheets/static.css';

export default class NewStoryForm extends Component {
	state = {
		username: '',
		content: '',
		tags: [],
		location: ''
	};

	componentDidMount = () => {
		if(this.props.story) {
			this.setState({
				tags:this.props.story.tags,
				content:this.props.story.content,
				location:this.props.story.location
			})
		} else {
			let options = {
				timeout: 5000
			};
			navigator.geolocation.getCurrentPosition(
				this.getLocation,
				this.handleError,
				options
			);
		}

	};

	handleError = error => {
		// set location to pacific ocean if user refuses geolocation request
		this.setState({
			location: '8.78,124.5'
		});
	};

	getLocation = pos => {
		const latLong = `${pos.coords.latitude.toFixed(
			2
		)},${pos.coords.longitude.toFixed(2)}`;
		this.setState({
			location: latLong
		});
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const storiesTags = this.state.tags.map(tag => {
			return { tag_attributes: tag };
		});
		let story = {
			user_id: this.props.userId,
			content: this.state.content,
			stories_tags_attributes: storiesTags,
			location: this.state.location
		};
		this.props.handleSubmit(story);
	};

	addTag = newTag => {
		const tag = { name: newTag };
		if(!this.state.tags.find(tag => tag.name === newTag)) {
			this.setState({
				tags: [...this.state.tags, tag]
			});
		}
	};

	deleteTag = e => {
		const tagToDelete = e.target.parentNode.innerText
		const newTags = [...this.state.tags].filter(tag => {
			return tag.name !== tagToDelete
		})
		this.setState({
			tags:newTags
		})
	}

	render() {
		const tagItems = this.state.tags.map(tag => {
			return <Label key={tag.name}>{tag.name}<Icon onClick={this.deleteTag} name='delete'/></Label>;
		});
		return (

			<div>
				<Form onSubmit={this.handleSubmit} id="storyForm">
					<Form.Field>
						<TextArea
							name="content"
							value={this.state.content}
							onChange={this.handleChange}
							placeholder="Share your story here..."
						/>
					</Form.Field>
				</Form>
				<Segment basic>
					<Label.Group color="teal">{this.state.tags.length > 0 ? tagItems : null}</Label.Group>
				</Segment>

				<NewTagForm handleSubmit={this.addTag} tags={this.props.tags} />

				{this.props.posted === false ? (
					<Message
						error
						header="Could not post story"
						content={this.props.errors}
					/>
				) : this.props.posted === true ? (
					<Message
						success
						header="Sucess!"
						content="Your story has been posted"
					/>
				) : null}
				<Button primary floated="right" type="submit" form="storyForm">
					Submit Story
				</Button>
			</div>
		);
	}
}
