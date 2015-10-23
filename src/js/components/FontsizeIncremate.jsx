import React, { Component, PropTypes } from 'react';

export default class FontsizeIncremate extends Component {

  static get propTypes() {
    return {
      actions: PropTypes.objectOf(PropTypes.func).isRequired
    };
  }

  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.actions.incrementSize();
  }

  render() {
    return (
      <button className="resize-button" type="button" onClick={this.handleClick.bind(this)}>
        <span className="octicon octicon-plus"></span>
      </button>
    );
  }

}
          // button.resize-button.js-incremate-button(type="button")
          //   span.octicon.octicon-plus
