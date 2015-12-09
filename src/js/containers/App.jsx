import React, { Component } from 'react';
import ZeroClipboard from 'react-zeroclipboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import ToggleSettingButton from '../components/ToggleSettingButton';
import FontSelect from '../components/FontSelect';
import HorizontalLayoutSelect from '../components/HorizontalLayoutSelect';
import VerticalLayoutSelect from '../components/VerticalLayoutSelect';
import FontsizeSelect from '../components/FontsizeSelect';
import FontsizeIncremate from '../components/FontsizeIncremate';
import FontsizeDecremate from '../components/FontsizeDecremate';
import ColorPicker from '../components/ColorPicker';
import ImageReader from '../components/ImageReader';
import ResetButton from '../components/ResetButton';
import Editor from '../components/Editor';
import Figlet from '../components/Figlet';
import DownloadButton from '../components/DownloadButton';
import DeleteBackgroundImageButton from '../components/DeleteBackgroundImageButton';

import * as rootActions from '../actions';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(rootActions, dispatch)
});

class App extends Component {

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

        <div className={classnames('settings', {
          visible: appearance.isOpened
        })}>
          <div className="settings-item">
            <div className="settings-item-title">Font</div>
            <div className="settings-item-body">
              <FontSelect actions={actions} font={figlet.font} />
              <div className="settings-item-sub">
                <div className="settings-item-title-sub">Horizontal Layout</div>
                <HorizontalLayoutSelect
                  actions={actions}
                  horizontalLayout={figlet.horizontalLayout}
                />
                <div className="settings-item-title-sub">Vertical Layout</div>
                <VerticalLayoutSelect
                  actions={actions}
                  verticalLayout={figlet.verticalLayout}
                />
              </div>
            </div>

          </div>

          <div className="settings-item">
            <div className="settings-item-title">Size</div>
            <div className="settings-item-body">
              <FontsizeIncremate actions={actions} />
              <span className="resize-rate">1.0px</span>
              <FontsizeDecremate actions={actions} />
              <div className="fontsize-selector">
                <FontsizeSelect actions={actions} size={appearance.size} />
              </div>
            </div>
          </div>

          <div className="settings-item">
            <div className="settings-item-title">Color</div>
            <div className="settings-item-body">
              <ColorPicker target="color" value={appearance.color} actions={actions} />
            </div>
          </div>

          <div className="settings-item">
            <div className="settings-item-title">Background</div>
            <div className="settings-item-body">
              <ColorPicker target="backgroundColor" value={appearance.backgroundColor} actions={actions} />
              <br />
              <ImageReader actions={actions} />
              <br />
              {appearance.backgroundImage === 'none' ?
                null :
                <DeleteBackgroundImageButton actions={actions} />}
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
          <Figlet
            dest={figlet.dest}
            backgroundColor={appearance.backgroundColor}
            backgroundImage={appearance.backgroundImage}
            size={appearance.size}
            color={appearance.color}
            actions={actions} />
          <div className="getter">
            <div className="download-button">
              <DownloadButton downloadImageURL={figlet.downloadImageURL} actions={actions} />
            </div>
            <div className="copy-button">
              <ZeroClipboard text={figlet.dest}>
                <button className="button-base">
                  <span className="octicon octicon-clippy"></span>
                  <span>Copy to clipboard</span>
                </button>
              </ZeroClipboard>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p><small>© figleditr | github/sugarshin</small></p>
        </footer>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
