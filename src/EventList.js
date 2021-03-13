import React, { Component } from "react";
import Event from "./Event";
// import { mockData } from './mock-data';

class EventList extends Component {
  render() {
    // const events = mockData;
    const { events } = this.props;
    return (
      <div className="event-list-container">
        <ul className="event-list">
          {events.map((event) => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default EventList;
