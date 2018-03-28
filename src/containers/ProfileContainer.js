import React from 'react'
import { Grid } from 'semantic-ui-react'
import StoryItem from '../components/StoryItem'
import '../stylesheets/item.css';
import EditStoryContainer from './EditStoryContainer'

export default class ProfileContainer extends React.Component {
  state = {
    myStories:[],
    storyToEdit:''
  }

  componentDidMount() {
    this.fetchStories()
  }


  fetchStories = () => {
    if (this.props.user.id) {
      const id = this.props.user.id
      let options = {
        method: "GET",
        headers: {
          "Content-Type":"application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      }
      fetch("https://safespace-backend.herokuapp.com/stories?user_id="+id, options)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            myStories:json
          })
      })
    }
  }

  editStory = story => {
    this.setState({
      storyToEdit: story
    })
  }

  storyCards = () => {
    return this.state.myStories.map(story => {
      return <StoryItem editable={true} iconClick={this.editStory} story={story} user={this.props.user} key={story.id} />
    })
  }

  afterSubmit = () => {
    this.setState({
      storyToEdit:''
    })
    this.fetchStories()
  }

  render() {
    return(
      <div>
        {this.state.storyToEdit ? <EditStoryContainer user={this.props.user} story={this.state.storyToEdit} afterSubmit={this.afterSubmit}/> : null}
        <Grid columns={3} stackable>
          {this.state.myStories.length > 0 ? this.storyCards() : <p>No stories yet</p>}
        </Grid>
      </div>

    )
  }
}
