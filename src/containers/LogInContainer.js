import React from 'react'
import {Form, Button} from 'semantic-ui-react'

export default class LogInContainer extends React.Component {
  state = {
    username:'',
    password:''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  createUser = () => {
    this.props.logInUser(this.state)
  }

  render() {
    return(
      <Form onSubmit={this.createUser}>
        <label>Username</label>
        <Form.Input name='username' value={this.state.username} onChange={this.handleChange}/>
        <label>Password</label>
        <Form.Input name='password' type='password' value={this.state.password} onChange={this.handleChange}/>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
