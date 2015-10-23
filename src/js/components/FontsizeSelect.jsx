import { Component, PropTypes } from 'react';

export default class FontsizeSelect extends Component {

  static get propTypes() {
    return {
      actions: PropTypes.objectOf(PropTypes.func).isRequired,
      maxFontSize: PropTypes.number.isRequired,
      minFontSize: PropTypes.number.isRequired
    };
  }

  constructor(props) {
    super(props);
  }

  handleChange(ev) {
    const value = parseInt(ev.target.value, 10);
    this.props.actions.changeSize(value);
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
    const { maxFontSize, minFontSize } = this.props;
    return Array.from({length: maxFontSize - minFontSize}, (v, index) => (
      index + minFontSize
    ))
    .map(size => <option value={size}>{`${size}px`}</option>);
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
