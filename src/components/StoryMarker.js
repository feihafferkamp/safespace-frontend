import React, { Component } from 'react';
import StoryCard from './StoryCard';
import { Marker, InfoWindow } from 'react-google-maps';
import closedEnvelope from '../icons/closedEnv.png';
import openEnvelope from '../icons/openEnv.png';

export default class StoryMarker extends Component {
	state = {
		position: {
			lat: Number(this.props.story.location.split(',')[0]),
			lng: Number(this.props.story.location.split(',')[1])
		},
		showInfo: false
	};

	// componentDidMount() {
	// 	fetch(
	// 		`http://maps.googleapis.com/maps/api/geocode/json?address=${
	// 			this.props.story.location
	// 		}&sensor=false`
	// 	)
	// 		.then(res => res.json())
	// 		.then(
	// 			json =>
	// 				json.status === 'OK'
	// 					? this.setState({
	// 							position: Object.assign(json.results[0].geometry.location)
	// 					  })
	// 					: this.setState({
	// 							position: { lat: 31, lng: -146 }
	// 					  })
	// 		);
	// }

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
		console.log();
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
