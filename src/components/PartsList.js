'use strict';

import React, { Component, PropTypes } from 'react';
import Part from './Part';
import CapacitorList from './CapacitorList';
import Capacitor from '../parts/capacitor';

export default class PartsList extends Component {
  render() {

    // hardcoded for now
    let capacitors = [
      new Capacitor('1', 'Ceramic', '10uF', '16V', '10%'),
      new Capacitor('2', 'Metal film', '.001uF', '25V', '10%')
    ];

    return (
      <div>
        <h2>Capacitors</h2>
        <CapacitorList data={capacitors}></CapacitorList>
      </div>
    );
  }
}
