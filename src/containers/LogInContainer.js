import React from 'react'
import {Form, Button, Container, Segment} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import '../stylesheets/sessions.css'

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

  login = () => {
    this.props.logInUser(this.state)
  }

  render() {
    return(
      <Container>
        <h1>Log In</h1>
        <Segment raised padded>
          <Form onSubmit={this.login}>
            <label>Username</label>
            <Form.Input name='username' value={this.state.username} onChange={this.handleChange}/>
            <label>Password</label>
            <Form.Input name='password' type='password' value={this.state.password} onChange={this.handleChange}/>
            <Button color='primary' type='submit'>Log In</Button>
          </Form>
          <div className='centered-text'>
            <NavLink exact to='/signup'>or, Sign Up</NavLink>
          </div>
        </Segment>
      </Container>
    )
  }
}
