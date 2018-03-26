import React from 'react';
import { Container } from 'semantic-ui-react';
import '../stylesheets/static.css';

const StaticComponent = props => {
	const page = props.match.url.slice(1);

	const about = (
		<div className="static">
			<h1>About</h1>
			<p>This is a project.</p>
		</div>
	);

	const contact = (
		<div className="static">
			<h1>Contact</h1>
			<p>Questions, comments, suggestions? Let us know!</p>
			<ul>
				<li>Katy - 123-456-7890</li>
				<li>Fei - 123-456-7890</li>
			</ul>
		</div>
	);

	return <Container>{page === 'about' ? about : contact}</Container>;
};

export default StaticComponent;
