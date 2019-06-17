import { Map, List } from 'immutable';
import { MESSAGES_TYPES, MESSAGE_SENDER, SESSION_NAME } from 'constants';

import { Video, Image, Message, Snippet, QuickReply } from 'messagesComponents';


export function createNewMessage(text, sender) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    component: Message,
    text,
    sender,
    showAvatar: sender === MESSAGE_SENDER.RESPONSE
  });
}

export function createLinkSnippet(elements, sender) {
  return Map({
    type: MESSAGES_TYPES.SNIPPET.LINK,
    component: Snippet,
    elements: elements,
    sender,
    showAvatar: true
  });
}

export function createVideoSnippet(video, sender) {
  return Map({
    type: MESSAGES_TYPES.VIDREPLY.VIDEO,
    component: Video,
    title: video.title,
    video: video.video,
    sender,
    showAvatar: true
  });
}

export function createImageSnippet(image, sender) {
  return Map({
    type: MESSAGES_TYPES.IMGREPLY.IMAGE,
    component: Image,
    title: image.title,
    image: image.image,
    sender,
    showAvatar: true
  });
}

export function createQuickReply(quickReply, sender) {
  return Map({
    type: MESSAGES_TYPES.QUICK_REPLY,
    component: QuickReply,
    text: quickReply.text,
    hint: quickReply.hint || 'Select an option...',
    quick_replies: List(quickReply.quick_replies),
    sender,
    showAvatar: true,
    chosenReply: null
  });
}

export function createComponentMessage(component, props, showAvatar) {
  return Map({
    type: MESSAGES_TYPES.CUSTOM_COMPONENT,
    component,
    props,
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar
  });
}

export function getLocalSession(storage, key) {
  // Attempt to get local session from storage
  const cachedSession = storage.getItem(key);
  var session = null;
  if (cachedSession) {
    // Found existing session in storage
    let parsedSession = JSON.parse(cachedSession)
    // Format conversation from array of object to immutable Map for use by messages components
    const formattedConversation = parsedSession.conversation
      ? Object.values(parsedSession.conversation).map(item => Map(item))
      : [];
    // Check if params is undefined
    const formattedParams = parsedSession.params
      ? parsedSession.params
      : {};
    //Create a new session to return
      session = {
      ...parsedSession,
      conversation: formattedConversation,
      params: formattedParams
    }
  }
  // Returns a formatted session object if any found, otherwise return undefined
  return session;
}

export function storeLocalSession(storage, key, sid) {
  // Attempt to store session id to local storage
  const cachedSession = storage.getItem(key);
  var session;
  if (cachedSession) {
      // Found exisiting session in storage
    let parsedSession = JSON.parse(cachedSession)
    session = {
      ...parsedSession,
      session_id: sid
    }
  } else {
    // No existing local session, create a new empty session with only session_id
    session = {
      session_id: sid
    }
  }
  // Store updated session to storage
  storage.setItem(key, JSON.stringify(session));
}

export const storeMessageTo = (storage) => (conversation) => {
  // Store a conversation List to storage
  const localSession = getLocalSession(storage, SESSION_NAME);
  const newSession = {
    // Since immutable List is not a native JS object, store conversation as array
    ...localSession,
    conversation: [...Array.from(conversation)]
  }
  storage.setItem(SESSION_NAME, JSON.stringify(newSession));
  return conversation
}

export const storeParamsTo = (storage) => (params) => {
  // Store a params List to storage
  const localSession = getLocalSession(storage, SESSION_NAME);
  const newSession = {
    // Since immutable Map is not a native JS object, store conversation as array
    ...localSession,
    params: params.toJS()
  }
  storage.setItem(SESSION_NAME, JSON.stringify(newSession));
  return params
}