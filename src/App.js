import React, { Component } from 'react';
import Clock from './components/Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  state = {
    deadline: 'July 15, 2020',
    newDeadline: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    console.log('state', this.state);
    this.setState({
      deadline: this.state.newDeadline,
    });
  };

  render() {
    return (
      <div className='App'>
        <h1 className='App-title'>Countdown to {this.state.deadline}</h1>
        <Clock deadline={this.state.deadline} />
        <Form inline={true} style={{ justifyContent: 'center' }}>
          <FormControl
            type='text'
            name='newDeadline'
            placeholder='Set new Deadline'
            onChange={this.onChange}
          />
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
