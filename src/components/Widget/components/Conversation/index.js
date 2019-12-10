import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import PersistentMenu from './components/PersistentMenu';
import './style.scss';

const Conversation = props =>
  <div className="conversation-container">
    {console.log("Conversation PM: " + JSON.stringify(props.persistentMenu))}
    <Header
      title={props.title}
      subtitle={props.subtitle}
      toggleChat={props.toggleChat}
      toggleFullScreen={props.toggleFullScreen}
      fullScreenMode={props.fullScreenMode}
      showCloseButton={props.showCloseButton}
      showFullScreenButton={props.showFullScreenButton}
      connected={props.connected}
      connectingText={props.connectingText}
      closeImage={props.closeImage}
      profileAvatar={props.profileAvatar}
    />
    <Messages
      profileAvatar={props.profileAvatar}
      params={props.params}
      customComponent={props.customComponent}
      showMessageDate={props.showMessageDate}
    />
    <PersistentMenu items={props.persistentMenu} />
    <Sender
      sendMessage={props.sendMessage}
      disabledInput={props.disabledInput}
    />
  </div>;

Conversation.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  sendMessage: PropTypes.func,
  profileAvatar: PropTypes.string,
  toggleFullScreen: PropTypes.func,
  fullScreenMode: PropTypes.bool,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showFullScreenButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  params: PropTypes.object,
  connected: PropTypes.bool,
  connectingText: PropTypes.string,
  closeImage: PropTypes.string,
  persistentMenu: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  customComponent: PropTypes.func
};

export default Conversation;
