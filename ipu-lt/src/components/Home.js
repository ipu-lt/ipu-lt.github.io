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
        </tr>
        {this.props.events.map(event => {
          return (
            <tr>
              <td>{event.title}</td>
              <td>{event.datetime}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}
