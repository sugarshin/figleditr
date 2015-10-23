import React, { Component, PropTypes } from 'react';

export default class ToggleSettingButton extends Component {

  static get propTypes() {
    return {
      isOpened: PropTypes.bool.isRequired,
      actions: PropTypes.objectOf(PropTypes.func).isRequired
    };
  }

  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.actions.toggleAppearancePanel();
  }

  render() {
    return (
      <button className="open-setting-button open-setting-button-opend" type="button" onClick={this.handleClick.bind(this)}>
        {this.props.isOpened ?
          <span className="octicon octicon-x"></span> :
          <span className="octicon octicon-gear"></span>}
      </button>
    );
  }

}
