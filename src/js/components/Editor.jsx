import { PropTypes } from 'react';
import throttle from 'lodash.throttle';

export default function Editor({ value, actions }) {
  return <textarea value={value} onInput={throttle(ev => { handleInput(ev, actions) }, 1000)} />;
}

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function handleInput(ev, { inputText }) {
  inputText(ev.target.value);
}
