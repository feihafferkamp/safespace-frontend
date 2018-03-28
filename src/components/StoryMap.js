import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';
import StoryMarker from './StoryMarker';

const StoryMap = withScriptjs(
	withGoogleMap(props => (
		<div>
			<GoogleMap
				defaultZoom={4}
				defaultCenter={{ lat: 37.0902, lng: -95.7129 }}>
				<MarkerClusterer enableRetinaIcons={true} maxZoom={5} gridSize={100}>
					{props.stories.length > 0
						? props.stories.map(s => <StoryMarker story={s} key={s.id} />)
						: null}
				</MarkerClusterer>
			</GoogleMap>
		</div>
	))
);

export default StoryMap;
