import React, { Component } from "react";
import Logo from "./Logo";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = (e) => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
    //  when "show details" button clicked to open card and display details, we want the window
    //  to auto scroll down to display all details. We don't want user to have to manually scroll down
    // to view what they just opened.
    let button = e.target;
    let viewedEvent = button.parentElement.parentElement;
    let eventHeight = viewedEvent.getBoundingClientRect().top;
    let scrollHeight = eventHeight + window.scrollY;

    setTimeout(() => {
      window.scrollTo(0, scrollHeight);
    });
  };

  render() {
    const showDetails = this.state.showDetails;
    const { event } = this.props;

    return (
      <div className="event">
        <div className="event-overview">
          <div className="event-heading">
            {" "}
            <h2 className="summary">{event.summary}</h2>
            <Logo name={event.summary} />
            <button className="event-link">
              <a href={event.htmlLink} target="_blank">
                Add to Calendar
              </a>
            </button>
          </div>
          <div className="event-overview-info">
            {" "}
            <p className="location">{event.location}</p>
            <p className="start-time">{event.start.dateTime}</p>
          </div>

          {!showDetails && (
            <button
              className="details-btn"
              onClick={(e) => {
                this.handleShowDetails(e);
              }}
            >
              Show Details
            </button>
          )}
          {showDetails && (
            <button
              className="details-btn"
              onClick={() => {
                this.setState({ showDetails: false });
              }}
            >
              Hide Details
            </button>
          )}
        </div>

        {showDetails && (
          <div className="event-details">
            <p className="description">{event.description}</p>
            <p className="end-time">{event.end.dateTime}</p>
            <p className="time-zone">{event.start.timeZone}</p>
            <p className="organizer-email">{event.organizer.email}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Event;
