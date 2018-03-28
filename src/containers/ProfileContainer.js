import React from 'react'
import { Grid } from 'semantic-ui-react'
import StoryItem from '../components/StoryItem'

export default class ProfileContainer extends React.Component {
  state = {
    myStories:[]
  }

  componentDidMount() {
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
      fetch("http://localhost:3000/stories?user_id="+id, options)
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          this.setState({
            myStories:json
          })
      })
    }
  }

  editStory = story => {
    console.log(story)
  }

  storyCards = () => {
    return this.state.myStories.map(story => {
      return <StoryItem editable={true} iconClick={this.editStory} story={story} user={this.props.user} key={story.id} />
    })
  }

  render() {
    return(
      <Grid cols={2}>
        <Grid.Column>
          {this.state.myStories.length > 0 ? this.storyCards() : <p>No stories yet</p>}
        </Grid.Column>
      </Grid>
    )
  }
}
