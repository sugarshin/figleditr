import React, { Component, PropTypes } from 'react';

export default class Figlet extends Component {

  static get propTypes() {
    return {
      actions: PropTypes.objectOf(PropTypes.func).isRequired,
      dest: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired
    };
  }

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Figlet#componentDidUpdate');
    }

    this.props.actions.updateDownloadImageURL(this.refs.figlet);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.dest !== this.props.dest ||
      nextProps.backgroundColor !== this.props.backgroundColor ||
      nextProps.backgroundImage !== this.props.backgroundImage ||
      nextProps.size !== this.props.size ||
      nextProps.color !== this.props.color;
  }

  render() {
    const { dest, backgroundColor, backgroundImage, size, color } = this.props;
    return (
      <div className="figlet" ref="figlet" style={{
        backgroundColor,
        backgroundImage: backgroundImage === 'none' ?
          'none' : `url(${backgroundImage})`
      }}>
        <pre><code style={{ color, fontSize: size }}>{dest}</code></pre>
      </div>
    );
  }

}
