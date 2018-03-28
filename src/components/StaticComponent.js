import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import '../stylesheets/static.css';

const StaticComponent = props => {
	const page = props.match.url.slice(1);

	const about = (
		<div className="static about">
			<h1>About</h1>
			<Segment raised padded basic>
				Safe Space is an anonymous social network platform for women worldwide
				to share their experiences, ask questions, and build community.
				<p id="note">
					<em>
						Note: All location requests are for the sole purpose of placing your
						stories on the map. We believe seeing posts by location can add a
						sense of solidarity to the Safe Space community. If you choose to
						block the geolocation prompt, however, we comepletely understand and
						will simply stash your story in the Pacific Ocean. :){' '}
					</em>
				</p>
			</Segment>
		</div>
	);

	const contact = (
		<div className="static contact">
			<h1>Contact</h1>
			<Segment raised padded basic>
				Questions, comments, suggestions? Let us know!
				<p>
					Katy: 123-456-7890
					<br />Fei: 123-456-7890
				</p>
			</Segment>
		</div>
	);

	return <Container>{page === 'about' ? about : contact}</Container>;
};

export default StaticComponent;
