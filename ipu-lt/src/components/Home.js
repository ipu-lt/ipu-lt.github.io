import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.props.fetchEvents();
  }

  render() {
    console.log('Fnit');
    console.log(this.props.events);
    return (
      <table>
        <tr>
          <th>Event</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
        {this.props.events.map(event => {
          return (
            <tr>
              <td>{event.title}</td>
              <td>{event.event_date}</td>
              <td>{event.content}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}
