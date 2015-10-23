import React, { PropTypes } from 'react';

export default function DownloadButton(props) {
  console.log('dsfdfds', props)
  return (
    <div className="download-button">
      <a href={props.downloadImageURL} download="figleditr.png" target="_blank">
        <span className="octicon octicon-cloud-download"></span>
        <span>Download image</span>
      </a>
    </div>
  );
}

DownloadButton.propTypes = {
  downloadImageURL: PropTypes.string
};
