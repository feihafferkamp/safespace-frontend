import React from 'react'
import { Grid } from 'semantic-ui-react'
import StoryItem from '../components/StoryItem'

export default class ProfileContainer extends React.Component {
  state = {
    myStories:[]
  }

  componentDidMount() {
    if (this.props.user) {
      const id = this.props.user.id
      let options = {
        method: "GET",
        headers: {
          "Content-Type":"application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      }
      fetch("http://localhost:3000/users/"+id, options)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            myStories:json.stories
          })
      })
    }
  }

  storyCards = () => {
    return this.state.myStories.map(story => {
      return <StoryItem story={story} user={this.props.user} key={story.id} />
    })
  }

  render() {
    console.log(this.state.stories)
    return(
      <Grid cols={2}>
        <Grid.Column>
          {this.storyCards()}
        </Grid.Column>
      </Grid>
    )
  }
}
