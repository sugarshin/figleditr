import React, { PropTypes } from 'react';

export default function FontsizeIncremate({ actions }) {
  return (
    <button className="resize-button" onClick={() => handleClick(actions)}>
      <span className="octicon octicon-plus"></span>
    </button>
  );
}

FontsizeIncremate.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function handleClick({ incrementSize }) {
  incrementSize();
}
