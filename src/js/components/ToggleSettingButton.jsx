import React, { PropTypes } from 'react';

export default function ToggleSettingButton(props) {
  return (
    <button className="open-setting-button open-setting-button-opend" type="button" onClick={() => handleClick(props.actions)}>
      {props.isOpened ?
        <span className="octicon octicon-x"></span> :
        <span className="octicon octicon-gear"></span>}
    </button>
  );
}

ToggleSettingButton.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function handleClick({ toggleAppearancePanel }) {
  toggleAppearancePanel();
}
