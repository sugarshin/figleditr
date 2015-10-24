import React, { PropTypes } from 'react';

export default function DeleteBackgroundImageButton(props) {
  return (
    <button className="delete-background-image-button" onClick={() => handleClick(props.actions)}>
      <span className="octicon octicon-x"></span>
      <span>Delete image</span>
    </button>
  );
}

DeleteBackgroundImageButton.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function handleClick({ deleteBackgroundImage }) {
  deleteBackgroundImage();
}
