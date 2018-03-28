import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import '../stylesheets/form.css';

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
			return <option key={tag.name} value={tag.name} />;
		});

		return (
			<Form id="tagForm" onSubmit={this.onSubmit}>
				<Input
					list="oldTags"
					icon="tags"
					iconPosition="left"
					name="tag"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<datalist id="oldTags">{oldTags}</datalist>
				<Button className="addTag" secondary type="submit">
					Add Tag
				</Button>
			</Form>
		);
	}
}

export default NewTagForm;
