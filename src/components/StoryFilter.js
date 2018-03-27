import React from 'react'
import { Form } from 'semantic-ui-react'

export default class StoryFilter extends React.Component {

  render() {
    return(
      <Form.Field label='Sort By' control='select'>
        <option value='most_recent'>Most Recent</option>
        <option value='comments'>Most Comments</option>
      </Form.Field>
    )
  }
}
