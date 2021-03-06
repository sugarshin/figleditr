import React, { Component, PropTypes } from 'react';
import now from 'performance-now';

import fontNames from '../constants/fontNames';

export default class FontSelect extends Component {

  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    font: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
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
      <select className="font-select" value={this.props.font} onChange={::this.handleChange}>
        {this._createOptions()}
      </select>
    );
  }

  _createOptions() {
    return fontNames.map(fontName => (
      <option key={`${fontName}:${now()}`} value={fontName}>{fontName}</option>
    ));
  }

}
