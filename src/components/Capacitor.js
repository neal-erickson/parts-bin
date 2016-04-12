'use strict';

import React, { Component, PropTypes } from 'react';

export default class Capacitor extends Component {
  render(){
    return(
      <tr>
        <td>{this.item.value}</td>
        <td>{this.item.tolerance}</td>
      </tr>
    )
  }
}
