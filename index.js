import React from 'react';
import ReactDOM from 'react-dom';
import { Widget, addUserMessage, emitUserMessage, toggleChat, openChat, closeChat, showChat, hideChat, isOpen, isVisible, dropMessages } from './index_for_react_app';

const plugin = {
  init: (args) => {
    ReactDOM.render(
      <Widget
        socketUrl={args.socketUrl}
        socketPath={args.socketPath}
        interval={args.interval}
        initPayload={args.initPayload}
        title={args.title}
        subtitle={args.subtitle}
        customData={args.customData}
        handleNewBotMessage={args.handleNewBotMessage}
        handleNewUserMessage={args.handleNewUserMessage}
        inputTextFieldHint={args.inputTextFieldHint}
        connectingText={args.connectingText}
        profileAvatar={args.profileAvatar}
        showCloseButton={args.showCloseButton}
        hideWhenNotConnected={args.hideWhenNotConnected}
        fullScreenMode={args.fullScreenMode}
        badge={args.badge}
        params={args.params}
        embedded={args.embedded}
        openLauncherImage={args.openLauncherImage}
        closeImage={args.closeImage}
        docViewer={args.docViewer}
        persistentMenu={args.persistentMenu}
      />, document.querySelector(args.selector)
    );
  }
};

export {
  plugin as default,
  Widget,
  toggleChat as toggle,
  openChat as open,
  closeChat as close,
  showChat as show,
  hideChat as hide,
  addUserMessage as addMessage,
  emitUserMessage as emitMessage,
  dropMessages as reset,
  isOpen,
  isVisible
};

