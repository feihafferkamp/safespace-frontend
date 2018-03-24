import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'


class NewTagForm extends React.Component {
  state = {
    value:''
  }


  onSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state.value)
    this.setState({
      value:''
    })
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {

    return(
      <Form id='tagForm' onSubmit={this.onSubmit}>
        <label>Tags: </label>
        <Input
          icon='tags'
          iconPosition='left'
          name='tag'
          value={this.state.value}
          onChange={this.handleChange}/>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }

}

export default NewTagForm
