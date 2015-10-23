import { Component } from 'react';

export default class Fontsize extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="settings-item">
        <div className="settings-item-title">Size</div>
        <div className="settings-item-body">
          {this.props.children}
        </div>
      </div>
    );
  }

}

          // <FontsizeIncremate />
          // <span className="resize-rate">1.0px</span>
          // <FontsizeDecremate />
          // <FontsizeSelect />
