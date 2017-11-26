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
        contacts: [
          {
            name: 'Adam',
            email: 'adam@gmail.com',
            number: '229-548-1234',
            address: '124 main st',
            city: 'Washington, DC',
            state: 'DC',
            zip: '35223'},
          {
            name: 'Justin',
            email: 'jrboyd90@gmail.com',
            number: '229-548-0949',
            address: '10855 Eagle Dr',
            city: 'Baytown',
            state: 'TX',
            zip: '77523'},
        ],
        name: '',
        email: '',
        number: '',
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


  handle_submit(event) {
    event.preventDefault();


    // add to this.state.contacts
    var person = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,

    };

    var contacts = this.state.contacts;
    contacts.push(person);
    // sort the contacts
    
    contacts.sort(function(a, b) {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    });

    this.setState({contacts: contacts});

    // console.log(this.state.newPerson);

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
              <br/>
              <TextField floatingLabelText="Your Email"
                defaultValue={this.state.email}
                onChange={event => this.update_state(event, 'email')}/>
              <TextField floatingLabelText="Your Phone Number"
                defaultValue={this.state.number}
                onChange={event => this.update_state(event, 'number')}/>
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
              <RaisedButton label="Add Contact" primary={true} type="submit"/>
            </CardActions>
          </form>
        </Card>
        <List people={this.state.contacts}/>
      </div>


    );
  }
}

export default MyForm;
