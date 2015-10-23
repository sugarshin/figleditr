import React, { Component, PropTypes } from 'react';

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

  handleChange(ev) {
    const value = parseInt(ev.target.value, 10);
    this.props.actions.changeSize(value);
  }

  render() {
    return (
      <select className="font-select" value={this.props.size} onChange={this.handleChange}>
        {this._createOptions()}
      </select>
    );
  }

  _createOptions() {
    return Array.from({length: MAX_FONT_SIZE - MIN_FONT_SIZE}, (v, index) => (
      index + MIN_FONT_SIZE
    ))
    .map(size => <option key={`${size}:${Date.now()}`} value={size}>{`${size}px`}</option>);
  }

}
      // .settings-item
      //   .settings-item-title Size
      //   .settings-item-body
      //     button.resize-button.js-incremate-button(type="button")
      //       span.octicon.octicon-plus
      //     span.resize-rate 1.0px
      //     button.resize-button.js-decremate-button(type="button")
      //       span.octicon.octicon-dash
      //     .fontsize-selector
      //       select.js-fontsize-select(name="font-sizes")
