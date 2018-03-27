import React, { Component } from 'react';
import NewStoryForm from '../components/NewStoryForm';
import '../stylesheets/new-story.css';

export default class NewStoryContainer extends Component {
	state = {
		tags: [],
		errors: '',
		posted: null,
		user: ''
	};

	componentDidMount = () => {
		this.getTags();
		this.getUser();
	};

	getTags = () => {
		fetch('http://localhost:3000/tags')
			.then(res => res.json())
			.then(tags => this.setState({ tags }));
	};

	addStory = storyAttributes => {
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({ story: storyAttributes })
		};
		fetch('http://localhost:3000/stories', options)
			.then(res => res.json())
			.then(json => {
				if (json.errors) {
					this.setState({
						posted: false,
						errors: json.errors.join(', ')
					});
				} else {
					this.setState({
						posted: true
					});
				}
			});
	};

	getUser = () => {
		if (localStorage.getItem('jwt')) {
			let options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${localStorage.getItem('jwt')}`
				}
			};
			fetch('http://localhost:3000/users', options)
				.then(res => res.json())
				.then(json => {
					this.setState({
						user: json,
						isLoggedIn: true
					});
				});
		} else {
			console.log('You are not logged in');
		}
	};

	render() {
		return (
			<div className="container">
				<NewStoryForm
					userId={this.state.user.id}
					posted={this.state.posted}
					errors={this.state.errors}
					tags={this.state.tags}
					handleSubmit={this.addStory}
				/>
			</div>
		);
	}
}
