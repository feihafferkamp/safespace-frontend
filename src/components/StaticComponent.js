import React from 'react';

const StaticComponent = props => {
	const page = props.match.url.slice(1);

	const about = (
		<div>
			<h1>About</h1>
			<p>This is a project.</p>
		</div>
	);

	const contact = (
		<div>
			<h1>Contact</h1>
			<p>Questions, comments, suggestions? Let us know!</p>
			<ul>
				<li>Katy - 123-456-7890</li>
				<li>Fei - 123-456-7890</li>
			</ul>
		</div>
	);

	return <div>{page === 'about' ? about : contact}</div>;
};

export default StaticComponent;
