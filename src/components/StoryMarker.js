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
		showInfo: false,
		icon: closedEnvelope
	};

	openShowInfo = () => {
		this.setState({ showInfo: true, icon: openEnvelope });
	};

	generateInfoWindow = () =>
		this.state.showInfo ? (
			<InfoWindow
				onCloseClick={() =>
					this.setState({ showInfo: false, icon: closedEnvelope })
				}>
				<StoryCard story={this.props.story} />
			</InfoWindow>
		) : null;

	envelope = () => (this.state.showInfo ? openEnvelope : closedEnvelope);

	render() {
		return (
			<Marker
				position={this.state.position}
				onClick={this.openShowInfo}
				icon={this.state.icon}>
				{this.generateInfoWindow()}
			</Marker>
		);
	}
}
