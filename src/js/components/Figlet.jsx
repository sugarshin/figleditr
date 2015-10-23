import React, { Component, PropTypes } from 'react';

export default class Figlet extends Component {

  static get propTypes() {
    return {
      actions: PropTypes.objectOf(PropTypes.func).isRequired,
      dest: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired
    };
  }

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    // console.log('componentDidUpdate', prevProps)
    this.props.actions.fetchCanvasIfNeeded(this.refs.figlet);
  }

  render() {
    const { dest, background, size, color } = this.props;
    return (
      <div className="figlet" ref="figlet" style={{ background }}>
        <pre><code style={{ color, fontSize: size }}>{dest}</code></pre>
      </div>
    );
  }

}

    // .figlet-container
    //   .js-figlet.figlet
    //   .getter
    //     .download-button
    //       a.js-download(href="" download="figleditr.png" target="_blank")
    //         span.octicon.octicon-cloud-download
    //         | Download image
    //     .copy-button
    //       button.js-copy(type="button")
    //         span.octicon.octicon-clippy
    //         | Copy to clipboard
