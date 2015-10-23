import React, { PropTypes } from 'react';

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
  actions[`change${_upcaseFirstLetter(target)}`](ev.target.value);
}

function _upcaseFirstLetter(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
