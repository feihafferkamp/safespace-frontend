import React from 'react';

export default function withAuthentication(ComponentWePassedIn, user) {
	return class extends React.Component {
		// constructor(props) {
		// 	super(props);
		// }

		componentDidMount() {
			this._checkAndRedirect();
		}

		componentDidUpdate() {
			this._checkAndRedirect();
		}

		_checkAndRedirect() {
			if (!localStorage.getItem('jwt')) this.props.history.push('/');
		}

		render() {
			return <ComponentWePassedIn user={user} {...this.props} />;
		}
	};
}
