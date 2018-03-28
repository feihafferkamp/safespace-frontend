import React from 'react'
import NewStoryForm from '../components/NewStoryForm'

export default class EditStoryContainer extends React.Component {


  render() {
    return(
      <NewStoryForm
        userId={this.state.user.id}
        posted={this.state.posted}
        errors={this.state.errors}
        tags={this.state.tags}
        handleSubmit={this.addStory}
      />
    )
  }
}
