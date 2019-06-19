import ConnectedWidget from './src';
import {
  emitUserMessage,
  addUserMessage,
  addResponseMessage,
  addLinkSnippet,
  addVideoSnippet,
  addImageSnippet,
  addQuickReply,
  renderCustomComponent,
  isOpen,
  isVisible,
  openChat,
  closeChat,
  toggleChat,
  showChat,
  hideChat,
  toggleInputDisabled,
  dropMessages
} from './src/store/actions/dispatcher';

export {
  ConnectedWidget as Widget,
  emitUserMessage,
  addUserMessage,
  addResponseMessage,
  addLinkSnippet,
  addVideoSnippet,
  addImageSnippet,
  addQuickReply,
  renderCustomComponent,
  isOpen,
  isVisible,
  openChat,
  closeChat,
  toggleChat,
  showChat,
  hideChat,
  toggleInputDisabled,
  dropMessages
};
