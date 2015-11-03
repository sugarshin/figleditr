import React, { Component, PropTypes } from 'react';

export default class VerticalLayoutSelect extends Component {

  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    verticalLayout: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  handleChange(ev) {
    this.props.actions.changeVerticalLayout(ev.target.value);
  }

  componentDidUpdate() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('VerticalLayoutSelect#componentDidUpdate');
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.verticalLayout !== this.props.verticalLayout;
  }

  render() {
    return (
      <select className="layout-select" value={this.props.verticalLayout} onChange={::this.handleChange}>
        <option value="default">Default</option>
        <option value="full">Full</option>
        <option value="fitted">Fitted</option>
        <option value="controlled smushing">Controlled Smushing</option>
        <option value="universal smushing">Universal Smushing</option>
      </select>
    );
  }

}
