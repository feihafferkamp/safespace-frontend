import React, { Component } from 'react';
import NewTagForm from './NewTagForm'
import { Form, Input, TextArea, Button, Segment } from 'semantic-ui-react'

export default class NewStoryForm extends Component {
	state = {
		username:'',
		content:'',
		tags:[],
		user_id:'',
	}

	handleChange = e => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const storiesTags = this.state.tags.map(tag => {
			return {tag_attributes: tag}
		})
		let story = {
			user_id: this.state.user_id,
			content: this.state.content,
			stories_tags_attributes: storiesTags
		}
		this.props.handleSubmit(story)
	}

	addTag = newTag => {
		const tag = {name: newTag}
		this.setState({
			tags: [...this.state.tags, tag]
		})
	}

	checkUser = () => {
		fetch(`http://localhost:3000/users?name=${this.state.username}`)
			.then(res => res.json())
			.then(json => {
				if(json) {
					this.setState({
						user_id:json.id
					})
				}
			})
	}

	render() {
		const tagItems = this.state.tags.map(tag => {
			return <li key={tag.name}>{tag.name}</li>
		})

		return (
			<div>
				<Form onSubmit={this.handleSubmit} id='storyForm'>
					<Form.Field inline>
						<label>Username</label>
						<Input icon={this.state.user_id !== '' ? {name:'checkmark', color:'green'} : null} name='username' onBlur={this.checkUser} value={this.state.username} onChange={this.handleChange} />
					</Form.Field>
					<Form.Field>
						<label>Story</label>
						<TextArea name='content' value={this.state.content} onChange={this.handleChange} />
					</Form.Field>
				</Form>
				<Segment>
					<ul>
						{tagItems}
					</ul>
				</Segment>

				<NewTagForm handleSubmit={this.addTag} />

				<Button type='submit' form='storyForm'>Submit</Button>
			</div>

		)
	}
}
