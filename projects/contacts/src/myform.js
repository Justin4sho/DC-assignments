import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import List from './list';
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
      newPerson: {
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip: '',
      }
    }
  }

  update_state(event, key) {
    // console.log(event.target);
    this.setState({[key]: event.target.value});
  }


  handle_submit(event) {
    event.preventDefault();
    this.setState({newPerson: this.state})
    // console.log(this.state.newPerson);

  }

  render() {

    return (
      <div>
        <AppBar title="Contacts"/>
        <Card className="md-card">
          <form>
            <CardTitle title="Add Contact" subtitle=""/>
            <CardText>
              <TextField floatingLabelText="Your Name"
                value={this.state.newPerson.name}
                onChange={event => this.update_state(event, 'newPerson.name')}/>
              <TextField floatingLabelText="Your Email"
                defaultValue={this.state.newPerson.email}
                onChange={event => this.update_state(event, 'email')}/>
              <TextField floatingLabelText="Your Phone Number"
                defaultValue={this.state.newPerson.number}
                onChange={event => this.update_state(event, 'phoneNumber')}/>
              <TextField floatingLabelText="Your Address"
                defaultValue={this.state.newPerson.address}
                onChange={event => this.update_state(event, 'address')}/>
              <TextField floatingLabelText="Your City"
                defaultValue={this.state.newPerson.city}
                onChange={event => this.update_state(event, 'city')}/>
              <TextField floatingLabelText="Your State"
                defaultValue={this.state.newPerson.state}
                onChange={event => this.update_state(event, 'state')}/>
              <TextField floatingLabelText="Your Zip Code"
                defaultValue={this.state.newPerson.zip}
                onChange={event => this.update_state(event, 'zip')}/>
            </CardText>
            <CardActions>
              <RaisedButton label="Add Contact" primary={true}
              onClick={event => this.handle_submit(event)}/>
            </CardActions>
          </form>
        </Card>
        <List person={this.state}/>
      </div>


    );
  }
}

export default MyForm;
