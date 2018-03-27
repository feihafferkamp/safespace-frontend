import React, { Component } from 'react';
import NewTagForm from './NewTagForm';
import {
	Form,
	Input,
	TextArea,
	Button,
	Segment,
	List,
	Message
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
		let options = {
			timeout: 5000
		};
		navigator.geolocation.getCurrentPosition(
			this.getLocation,
			this.handleError,
			options
		);
	};

	handleError = error => {
		console.dir(error);
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
		this.setState({
			tags: [...this.state.tags, tag]
		});
	};


	render() {
		const tagItems = this.state.tags.map(tag => {
			return <List.Item key={tag.name}>{tag.name}</List.Item>;
		});


		return (
			<div>
				<Form onSubmit={this.handleSubmit} id="storyForm">
					<Form.Field>
						<label>Story</label>
						<TextArea
							name="content"
							value={this.state.content}
							onChange={this.handleChange}
						/>
					</Form.Field>
				</Form>
				<Segment secondary>
					<h4>Tags</h4>
					<List bulleted horizontal>
						{tagItems}
					</List>
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
				<Button type="submit" form="storyForm">
					Submit Story
				</Button>
			</div>
		);
	}
}
