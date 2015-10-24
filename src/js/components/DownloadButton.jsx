import React, { PropTypes } from 'react';

export default function DownloadButton(props) {
  return (
    <a href={props.downloadImageURL} download="figleditr.png" target="_blank">
      <span className="octicon octicon-cloud-download"></span>
      <span>Download image</span>
    </a>
  );
}

DownloadButton.propTypes = {
  downloadImageURL: PropTypes.string
};
