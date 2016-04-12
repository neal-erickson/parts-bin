'use strict';

import capTypes from './capacitorType';

export default class Capacitor {
  constructor (number, type, value, voltage, tolerance){
    this.number = number;
    this.type = type;
    this.value = value;
    this.voltage = voltage;
    this.tolerance = tolerance;
  }
}
