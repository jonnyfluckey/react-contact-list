import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import Contacts from './contacts/Contacts'

class App extends Component {

  state = {
    contacts: [
      {id: 1, firstName: 'Bob', phone: '555-555-5555'},
      {id: 2, firstName: 'Joe', phone: '555-555-5555'},
      {id: 3, firstName: 'Joe-Bob', phone: '555-555-5555'}

    ]
  }
  render() {
    const {contacts} = this.state
    return (
      <Container>
        <Header as='h1'>React Contact List</Header>
        <Contacts contacts={contacts} />
      </Container>
    );
  }
}

export default App;
