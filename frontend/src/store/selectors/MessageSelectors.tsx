import { createSelector } from 'reselect';

export const getMessageById = (state, messageId) =>
    state.messages.messages.find((message) => message.id === messageId);

export const getMessage = () => createSelector([getMessageById], (message) => message);
