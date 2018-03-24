import React, { Component } from 'react';
import NewStoryForm from '../components/NewStoryForm';

export default class NewStoryContainer extends Component {
	state = {
		tags:[]
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
			.then(json => console.log(json))
	}

	render() {
		return <NewStoryForm tags={this.state.tags} handleSubmit={this.addStory}/>;
	}
}
