import React from 'react';
import { Table } from 'semantic-ui-react';
import Contact from './Contact';

const Contacts = ({ contacts, remove }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Option</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        contacts.map( contact => (
          <Contact {...contact} remove={remove} />
        ))
      }
    </Table.Body>
  </Table>
)

export default Contacts