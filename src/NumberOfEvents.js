import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
       numberOfEvents: value
     });
  }

  render() {
    return (
      <div className='number-of-events'>
        <label className='number-of-events-label'>Number of Events: </label>
        <input
          type='text'
          className='event-number'
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}>
        </input>
      </div>
    )
  }
}

export default NumberOfEvents;