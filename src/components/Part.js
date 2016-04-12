'use strict';

import React, { Component, PropTypes } from 'react';

export default class Part extends Component {
  render() {
    return (
      <div>
        <p>Name:</p>
        <p>{this.props.item.voltage}</p>
      </div>
    );
  }
}
