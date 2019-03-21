import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class ContactForm extends Component {

  state = { firstName: '', phone: '' }

  handleSubmit = (e) => {
    // stop the form from reloading
    e.preventDefault()
    // call a funtion to add the contact
    this.props.add(this.state)
    this.setState({firstName: '', phone: ''})
  }

  handleChange = (e) => {
    // change the state to what the user inputs in the form
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name'
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input placeholder='Phone'
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>

    )
  }

}

export default ContactForm