import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class List extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Phone Number</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
              <TableHeaderColumn>City</TableHeaderColumn>
              <TableHeaderColumn>State</TableHeaderColumn>
              <TableHeaderColumn>Zip</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>{this.props.person.name}</TableRowColumn>
              <TableRowColumn>{this.props.person.email}</TableRowColumn>
              <TableRowColumn>{this.props.person.phoneNumber}</TableRowColumn>
              <TableRowColumn>{this.props.person.address}</TableRowColumn>
              <TableRowColumn>{this.props.person.city}</TableRowColumn>
              <TableRowColumn>{this.props.person.state}</TableRowColumn>
              <TableRowColumn>{this.props.person.zip}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default List;
