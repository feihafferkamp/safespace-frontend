import React, { Component } from 'react';
import StoryMap from '../components/StoryMap';
import StoryList from '../components/StoryList';
import '../stylesheets/map.css';

export default class StoryContainer extends Component {
	state = { stories: [] };

	componentDidMount = () => {
		fetch('https://safespace-backend.herokuapp.com/stories')
			.then(res => res.json())
			.then(stories => this.setState({ stories }));
	};

	render() {
		console.log(this.props);
		return (
			<div>
				{this.props.type === 'feed' ? (
					<StoryList stories={this.state.stories} user={this.props.user} />
				) : (
					<StoryMap
						user={this.props.user}
						googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&v=3.exp&libraries=geometry,drawing,places`}
						loadingElement={<div id="loading-element" />}
						containerElement={<div id="map-container" />}
						mapElement={<div id="map-element" />}
						stories={this.state.stories}
					/>
				)}
			</div>
		);
	}
}
