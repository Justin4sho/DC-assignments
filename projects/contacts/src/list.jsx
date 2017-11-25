import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  select(event) {
    // console.log(event.target);
    this.setState({selected:true});
    console.log(this.state.selected);
  }




  rows() {
    var html = this.props.people.map((person) => {
      return (

        <Card>
          <CardHeader
            title={person.name}
            subtitle={person.city + ', ' + person.state}
            actAsExpander={true}
            showExpandableButton={true}
            >
          </CardHeader>
          {/* <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions> */}
          <CardText expandable={true}>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>City</TableHeaderColumn>
                <TableHeaderColumn>State</TableHeaderColumn>
                <TableHeaderColumn>Email</TableHeaderColumn>
                <TableHeaderColumn>Phone Number</TableHeaderColumn>
                <TableHeaderColumn>Address</TableHeaderColumn>
                <TableHeaderColumn>Zip</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow key={person.name}>
                <TableRowColumn>{person.name}</TableRowColumn>
                <TableRowColumn>{person.city}</TableRowColumn>
                <TableRowColumn>{person.state}</TableRowColumn>
                <TableRowColumn>{person.email}</TableRowColumn>
                <TableRowColumn>{person.number}</TableRowColumn>
                <TableRowColumn>{person.address}</TableRowColumn>
                <TableRowColumn>{person.zip}</TableRowColumn>
              </TableRow>
            </TableBody>
          </CardText>
        </Card>
      )
    });

    return html;
  }

  render() {


    return (
      <div>
        {this.rows()}
      </div>
    );
  }
}

export default List;
