import React, { Component } from 'react';
import ToggleSettingButton from './ToggleSettingButton';

export default class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <h1>
          <a href="./">figleditr</a>
          <div className="open-setting-button-wrapper">
            {this.props.children}
          </div>
        </h1>
      </header>
    );
  }

}
            // <button className="open-setting-button open-setting-button-opend" type="button">
            //   <span className="octicon octicon-gear"></span>
            //   <span className="octicon octicon-x"></span>
            // </button>
