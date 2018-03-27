import React from 'react'
import { Grid } from 'semantic-ui-react'

export default class ProfileContainer extends React.Component {
  state = {
    myStories:[]
  }

  componentDidMount() {
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
        console.log(json)
    })
  }

  render() {
    console.log(this.props)
    return(
      <Grid cols={2}>
        <Grid.Column>

        </Grid.Column>
      </Grid>
    )
  }
}
