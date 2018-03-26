import React, { Component } from 'react';
import StoryCard from './StoryCard';
import { Marker, InfoWindow } from 'react-google-maps';
import closedEnvelope from '../icons/closedEnvelope.png';
import openEnvelope from '../icons/openEnvelope.png';

export default class StoryMarker extends Component {
	state = { position: { lat: 40.7128, lng: -74.006 }, showInfo: false };

	componentDidMount() {
		fetch(
			`http://maps.googleapis.com/maps/api/geocode/json?address=${
				this.props.story.location
			}&sensor=false`
		)
			.then(res => res.json())
			.then(
				json =>
					json.status === 'OK'
						? this.setState({
								position: Object.assign(json.results[0].geometry.location)
						  })
						: null
			);
	}

	toggleShowInfo = () => {
		this.setState({ showInfo: !this.state.showInfo });
	};

	generateInfoWindow = () =>
		this.state.showInfo ? (
			<InfoWindow onCloseClick={() => this.toggleShowInfo}>
				<StoryCard story={this.props.story} />
			</InfoWindow>
		) : null;

	envelope = () => (this.state.showInfo ? openEnvelope : closedEnvelope);

	render() {
		return (
			<Marker
				position={this.state.position}
				onClick={this.toggleShowInfo}
				icon={this.envelope()}>
				{this.generateInfoWindow()}
			</Marker>
		);
	}
}
