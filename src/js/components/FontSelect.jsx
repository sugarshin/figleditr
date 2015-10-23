import { Component, PropTypes } from 'react';

import FontNames from '../constants/FontNames';

export default class FontSelect extends Component {

  static get propTypes() {
    return {
      actions: PropTypes.objectOf(PropTypes.func).isRequired
    };
  }

  constructor(props) {
    super(props);
  }

  handleChange(ev) {
    this.props.actions.changeFont(ev.target.value);
  }

  render() {
    return (
      <div className="settings-item">
        <div className="settings-item-title">Font</div>
        <div className="settings-item-body">
          <select className="font-select" onChange={this.handleChange.bind(this)}>
            {this._createOptions()}
          </select>
        </div>
      </div>
    );
  }

  _createOptions() {
    return FontNames.map(name => (
      <option value={name} selected={name === 'Standard'}>{name}</option>
    ));
  }

}
      // .settings-item
      //   .settings-item-title Font
      //   .settings-item-body
      //     select.js-select.font-select(name="fonts")
