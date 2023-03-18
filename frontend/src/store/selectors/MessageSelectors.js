import { createSelector } from 'reselect';

export const getmessageById = (state, messageId) =>
    state.messages.messages.find((message) => message.id === messageId);

export const getmessage = () => createSelector([getmessageById], (message) => message);
