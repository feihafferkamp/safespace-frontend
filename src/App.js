import React, { Component } from 'react';
import Page from './containers/Page';
import {withRouter} from 'react-router-dom'

class App extends Component {
	render() {
		const RouterPage = withRouter(Page)
		return <RouterPage />;
	}
}

export default App;
