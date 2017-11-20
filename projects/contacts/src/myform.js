import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      city: '',
      state: '',
      zip: '',

    }
  }

  update_state(event, key) {
    // console.log(event.target);
    this.setState({[key]: event.target.value});
  }

  update_select = (event, index, value) => {
    this.setState({color: value});
  }

  handle_submit(event) {
    console.log('Submitted:' , this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <AppBar title="Contacts"/>
        <Card className="md-card">
          <form onSubmit={event => this.handle_submit(event)}>
            <CardTitle title="Add Contact" subtitle=""/>
            <CardText>
              <TextField floatingLabelText="Your Name"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>
              <TextField floatingLabelText="Your Email"
                defaultValue={this.state.email}
                onChange={event => this.update_state(event, 'email')}/>
              <TextField floatingLabelText="Your Phone Number"
                defaultValue={this.state.number}
                onChange={event => this.update_state(event, 'phoneNumber')}/>
              <TextField floatingLabelText="Your Address"
                defaultValue={this.state.address}
                onChange={event => this.update_state(event, 'address')}/>
              <TextField floatingLabelText="Your City"
                defaultValue={this.state.city}
                onChange={event => this.update_state(event, 'city')}/>
              <TextField floatingLabelText="Your State"
                defaultValue={this.state.state}
                onChange={event => this.update_state(event, 'state')}/>
              <TextField floatingLabelText="Your Zip Code"
                defaultValue={this.state.zip}
                onChange={event => this.update_state(event, 'zip')}/>
            </CardText>
            <CardActions>
              <RaisedButton label="Submit" primary={true}/>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
}

export default MyForm;
