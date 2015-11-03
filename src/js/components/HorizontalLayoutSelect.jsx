import React, { Component, PropTypes } from 'react';

export default class HorizontalLayoutSelect extends Component {

  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    horizontalLayout: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  handleChange(ev) {
    this.props.actions.changeHorizontalLayout(ev.target.value);
  }

  componentDidUpdate() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('HorizontalLayoutSelect#componentDidUpdate');
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.horizontalLayout !== this.props.horizontalLayout;
  }

  render() {
    return (
      <select className="layout-select" value={this.props.horizontalLayout} onChange={::this.handleChange}>
        <option value="default">Default</option>
        <option value="full">Full</option>
        <option value="fitted">Fitted</option>
        <option value="controlled smushing">Controlled Smushing</option>
        <option value="universal smushing">Universal Smushing</option>
      </select>
    );
  }

}
