import React, { PropTypes } from 'react';
// import throttle from 'lodash.throttle';

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

  // return <textarea value={value} onInput={throttle(ev => { handleInput(ev, actions) }, 1000)} />;
