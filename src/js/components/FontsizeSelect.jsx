import React, { Component, PropTypes } from 'react';
import now from 'performance-now';

import { MAX_FONT_SIZE, MIN_FONT_SIZE } from '../constants';

export default class FontsizeSelect extends Component {

  static get propTypes() {
    return {
      actions: PropTypes.objectOf(PropTypes.func).isRequired,
      size: PropTypes.number.isRequired
    };
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('FontsizeSelect#componentDidUpdate');
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.size !== this.props.size;
  }

  handleChange(ev) {
    const value = parseInt(ev.target.value, 10);
    this.props.actions.changeSize(value);
  }

  render() {
    return (
      <select value={this.props.size} onChange={this.handleChange}>
        {this._createOptions()}
      </select>
    );
  }

  _createOptions() {
    return Array.from({length: MAX_FONT_SIZE - MIN_FONT_SIZE}, (v, index) => (
      index + MIN_FONT_SIZE
    ))
    .map(size => <option key={`${size}:${now()}`} value={size}>{`${size}px`}</option>);
  }

}
