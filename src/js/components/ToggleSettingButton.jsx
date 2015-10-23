import { Component } from 'react';

export default class ToggleSettingButton extends Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.actions.toggleAppearancePanel();
  }

  render() {
    return (
      <button className="open-setting-button open-setting-button-opend" type="button" onClick={this.handleClick.bind(this)}>
        {this.props.appearance.isOpened ?
          <span className="octicon octicon-x"></span> :
          <span className="octicon octicon-gear"></span>}
      </button>
    );
  }

}
