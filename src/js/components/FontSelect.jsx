import React, { Component, PropTypes } from 'react';
import now from 'performance-now';

import FontNames from '../../font-names';

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

  componentDidUpdate() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('FontSelect#componentDidUpdate');
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.font !== this.props.font;
  }

  render() {
    return (
      <select className="font-select" value={this.props.font} onChange={this.handleChange}>
        {this._createOptions()}
      </select>
    );
  }

  _createOptions() {
    return FontNames.map(fontName => (
      <option key={`${fontName}:${now()}`} value={fontName}>{fontName}</option>
    ));
  }

}
