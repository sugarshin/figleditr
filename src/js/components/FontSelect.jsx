import React, { Component, PropTypes } from 'react';

import FontNames from '../constants/FontNames';

export default class FontSelect extends Component {

  static get propTypes() {
    return {
      actions: PropTypes.objectOf(PropTypes.func).isRequired,
      font: PropTypes.string.isRequired
    };
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.props.actions.changeFont(ev.target.value);
  }

  render() {
    return (
      <div className="settings-item">
        <div className="settings-item-title">Font</div>
        <div className="settings-item-body">
          <select className="font-select" value={this.props.font} onChange={this.handleChange}>
            {this._createOptions()}
          </select>
        </div>
      </div>
    );
  }

  _createOptions() {
    return FontNames.map(fontName => (
      <option key={`${fontName}:${Date.now()}`} value={fontName}>{fontName}</option>
    ));
  }

}
