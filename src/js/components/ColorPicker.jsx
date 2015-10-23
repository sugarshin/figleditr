import { PropTypes } from 'react';

// export default class ColorPicker extends Component {
//
//   static get propTypes() {
//     return {
//       actions: PropTypes.objectOf(PropTypes.func).isRequired,
//       target: PropTypes.string.isRequired,
//       value: PropTypes.string.isRequired
//     };
//   }
//
//   constructor(props) {
//     super(props);
//   }
//
//   handleChange(ev) {
//     const { actions, target } = this.props;
//     actions[`change${this._upcaseFirstLetter(target)}`](ev.target.value));
//   }
//
//   render() {
//     return (
//       <input type="color" value={this.props.value} onChange={this.handleChange.bind(this)} />
//     );
//   }
//
//   _upcaseFirstLetter(str) {
//     return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
//   }
//
// }

export default function ColorPicker(props) {
  return <input type="color" value={props.value} onChange={ev => handleChange(ev, props)} />;
}

ColorPicker.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  target: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

function handleChange(ev, props) {
  const { actions, target } = props;
  actions[`change${_upcaseFirstLetter(target)}`](ev.target.value));
}

function _upcaseFirstLetter(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

      // .settings-item
      //   .settings-item-title Color
      //   .settings-item-body
      // input.js-color-picker-for-color(type="color" value="#323b43")
