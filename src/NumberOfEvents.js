import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({
      numberOfEvents: value,
    });

    if (value < 1) {
      this.setState({
        numbText: "Please choose to view at least 1 event",
      });
    } else {
      this.setState({
        numbText: "",
      });
    }
  };

  render() {
    return (
      <div className="number-of-events">
        <ErrorAlert text={this.state.numbText} />
        <label className="number-of-events-label">Number of Events: </label>
        <input
          type="number"
          className="event-number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
