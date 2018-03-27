import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

class NewTagForm extends React.Component {
	state = {
		value: ''
	};

	onSubmit = e => {
		e.preventDefault();
		if (this.state.value !== '') {
			this.props.handleSubmit(this.state.value);
		}
		this.setState({
			value: ''
		});
	};

	handleChange = e => {
		this.setState({
			value: e.target.value
		});
	};

	render() {
		const oldTags = this.props.tags.map(tag => {
			return <option key={tag.id} value={tag.name} />;
		});

		return (
			<Form id="tagForm" onSubmit={this.onSubmit}>
				<label>Tags: </label>
				<Input
					list="oldTags"
					icon="tags"
					iconPosition="left"
					name="tag"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<datalist id="oldTags">{oldTags}</datalist>
				<Button type="submit">Add Tag</Button>
			</Form>
		);
	}
}

export default NewTagForm;
