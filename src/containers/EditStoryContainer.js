import React from 'react'
import NewStoryForm from '../components/NewStoryForm'
import '../stylesheets/new-story.css';

export default class EditStoryContainer extends React.Component {
  state = {
    tags:[],
    posted:false,
    errors:''
  }

  componentDidMount = () => {
    fetch('https://safespace-backend.herokuapp.com/tags')
			.then(res => res.json())
			.then(tags => this.setState({ tags }));
  }

  patchStory = storyAttributes => {
		let options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${localStorage.getItem('jwt')}`
			},
			body: JSON.stringify({ story: storyAttributes })
		};
		fetch('https://safespace-backend.herokuapp.com/stories/'+this.props.story.id, options)
			.then(res => res.json())
			.then(json => {
				if (json.errors) {
					this.setState({
						posted: false,
						errors: json.errors.join(', ')
					});
				} else {
					this.setState({
						posted: true
					});
				}
			});
      this.props.afterSubmit()
	};

  render() {
    return(
      <div className='container'>
        <NewStoryForm
          userId={this.props.user.id}
          tags={this.state.tags}
          handleSubmit={this.patchStory}
          story={this.props.story}
        />
      </div>
    )
  }
}
