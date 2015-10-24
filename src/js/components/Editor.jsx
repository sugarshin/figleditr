import React, { PropTypes } from 'react';

export default function Editor({ value, actions }) {
  return <textarea defaultValue={value} onInput={ev => handleInput(ev, actions)} />;
}

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function handleInput(ev, { inputText }) {
  inputText(ev.target.value);
}
