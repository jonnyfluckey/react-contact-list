import React from 'react'
import { Table, Label, Button } from 'semantic-ui-react'

const Contact = ({ id, firstName, phone, remove }) => (
<Table.Row id={id}>
            <Table.Cell>
              <Label>{firstName}</Label>
            </Table.Cell>
            <Table.Cell>{phone}</Table.Cell>
            <Table.Cell>
              <Button color='blue' onClick={() => remove(id)}>
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>

)

export default Contact