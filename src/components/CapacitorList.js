'use strict';

import React, { Component, PropTypes } from 'react';
//import Capacitor from './Capacitor';

export default class CapacitorList extends Component {
  render(){
    return(
      <table className="pure-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Value</th>
            <th>Tolerance</th>
            <th>Voltage</th>
          </tr>
        </thead>
        <tbody>
        {this.props.data.map(item =>
          <tr key={item.number}>
            <td>{item.type}</td>
            <td>{item.value}</td>
            <td>{item.tolerance}</td>
            <td>{item.voltage}</td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}
