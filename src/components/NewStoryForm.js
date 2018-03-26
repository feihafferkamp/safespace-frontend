import React, { Component } from 'react';
import NewTagForm from './NewTagForm'
import { Form, Input, TextArea, Button, Segment, List, Message } from 'semantic-ui-react'

export default class NewStoryForm extends Component {
	state = {
		username:'',
		content:'',
		tags:[],
		user_id:'',
		location:''
	}

	componentDidMount = () => {
		let options = {
			timeout:5000
		}
		navigator.geolocation.getCurrentPosition(this.getZip, this.handleError, options)
	}

	handleError = error => {
		console.dir(error)
	}

	getZip = (pos) => {
		const latLong = `${pos.coords.latitude.toFixed(3)},${pos.coords.longitude.toFixed(3)}`
		console.log(latLong)
		this.setState({
			location:latLong
		})
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
			stories_tags_attributes: storiesTags,
			location:this.state.location
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
			return <List.Item key={tag.name}>{tag.name}</List.Item>
		})

		return (
			<div>
				<Form onSubmit={this.handleSubmit} id='storyForm' >
					<Form.Field inline>
						<label>Username</label>
						<Input icon={this.state.user_id !== '' ? {name:'checkmark', color:'green'} : null} name='username' onBlur={this.checkUser} value={this.state.username} onChange={this.handleChange} />
					</Form.Field>
					<Form.Field>
						<label>Story</label>
						<TextArea name='content' value={this.state.content} onChange={this.handleChange} />
					</Form.Field>
				</Form>
				<Segment secondary>
					<h4>Tags</h4>
					<List bulleted horizontal>
						{tagItems}
					</List>
				</Segment>

				<NewTagForm handleSubmit={this.addTag} tags={this.props.tags}/>
					{this.props.posted === false ? <Message
						error
						header='Could not post story'
						content={this.props.errors}
						/> : this.props.posted === true ?
					<Message
						success
						header='Sucess!'
						content='Your story has been posted'
					/>
				: null}
				<Button type='submit' form='storyForm'>Submit Story</Button>
			</div>

		)
	}
}
