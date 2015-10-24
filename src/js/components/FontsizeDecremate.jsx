import React, { PropTypes } from 'react';

export default function FontsizeDecremate({ actions }) {
  return (
    <button className="resize-button" onClick={() => handleClick(actions)}>
      <span className="octicon octicon-dash"></span>
    </button>
  );
}

FontsizeDecremate.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function handleClick({ decrementSize }) {
  decrementSize();
}
