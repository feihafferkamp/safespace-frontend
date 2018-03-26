import React, { Component } from 'react';
import NewStoryForm from '../components/NewStoryForm';
import { Container } from 'semantic-ui-react'

export default class NewStoryContainer extends Component {
	state = {
		tags:[],
		errors:'',
		posted:null
	}

	componentDidMount = () => {
		fetch('http://localhost:3000/tags')
			.then(res => res.json())
			.then(tags => this.setState({tags}))
	}

	addStory = storyAttributes => {
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({story: storyAttributes})
		}
		fetch('http://localhost:3000/stories', options)
			.then(res => res.json())
			.then(json => {
				if(json.errors.length > 0) {
					this.setState({
						posted:false,
						errors:json.errors.join(', ')
					})
				} else {
					this.setState({
						posted:true
					})
				}
			})
	}

	render() {
		return (
			<Container>
				<NewStoryForm posted={this.state.posted} errors={this.state.errors} tags={this.state.tags} handleSubmit={this.addStory}/>

		</Container>
		)
	}
}
