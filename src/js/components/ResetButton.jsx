import React, { PropTypes } from 'react';

export default function ResetButton({ actions }) {
  return (
    <button onClick={() => actions.resetAppearance()}>Reset</button>
  );
}

ResetButton.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};
