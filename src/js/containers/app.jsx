import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ToggleSettingButton from '../components/ToggleSettingButton';
import FontSelect from '../components/FontSelect';
import Fontsize from '../components/Fontsize';
import FontsizeSelect from '../components/FontsizeSelect';
import FontsizeIncremate from '../components/FontsizeIncremate';
import FontsizeDecremate from '../components/FontsizeDecremate';
import ColorPicker from '../components/ColorPicker';
import ImageReader from '../components/ImageReader';
import ResetButton from '../components/ResetButton';
import Editor from '../components/Editor';
import Figlet from '../components/Figlet';
import DownloadButton from '../components/DownloadButton';

import * as actions from '../actions';

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render() {
    const { figlet, appearance, actions } = this.props;

    return (
      <div className="app">

        <header className="header">
          <h1><a href="./">figleditr</a></h1>
          <div className="open-setting-button-wrapper">
            <ToggleSettingButton isOpened={appearance.isOpened} actions={actions} />
          </div>
        </header>

        <div className="settings visible">
          <FontSelect actions={actions} font={figlet.font} />
          <Fontsize>
            <FontsizeIncremate actions={actions} />
            <span className="resize-rate">1.0px</span>
            <FontsizeDecremate actions={actions} />
            <FontsizeSelect actions={actions} size={appearance.size} />
          </Fontsize>

          <div className="settings-item">
            <div className="settings-item-title">Color</div>
            <div className="settings-item-body">
              <ColorPicker target="color" value={appearance.color} actions={actions} />
            </div>
          </div>

          <div className="settings-item">
            <div className="settings-item-title">Background</div>
            <div className="settings-item-body">
              <ColorPicker target="background" value={appearance.background} actions={actions} />
              <br />
              <ImageReader actions={actions} />
            </div>
          </div>

          <div className="reset-button">
            <ResetButton actions={actions} />
          </div>
        </div>

        <div className="editor">
          <Editor value={figlet.source} actions={actions} />
        </div>

        <div className="figlet-container">
          <Figlet dest={figlet.dest} background={appearance.background} size={appearance.size} color={appearance.color} actions={actions} />
          <div className="getter">
            <DownloadButton downloadImageURL={figlet.downloadImageURL} />
          </div>
        </div>

        <footer className="footer">
          <p><small>© figleditr | github/sugarshin</small></p>
        </footer>

      </div>
    );
  }
}

        // <IncrementButton actions={actions} />
        // <DecrementButton {...actions} />
        // <IncrementAsyncButton {...actions} />
        // <IncrementByAsyncButton {...actions} />
        // <span>{count}</span>
