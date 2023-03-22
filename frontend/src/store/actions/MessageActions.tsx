import {
    createMessage,
    formatMessages,
    getMessages,
    deleteMessage,
    updateMessage,
} from '../../services/MessagesService';
import {
    CONFIRMED_CREATE_MESSAGE_ACTION,
    CONFIRMED_DELETE_MESSAGE_ACTION,
    CONFIRMED_EDIT_MESSAGE_ACTION,
    CONFIRMED_GET_MESSAGES,
} from './MessageTypes';

export function deleteMessageAction(MessageId, history) {
    return (dispatch, getState) => {
        deleteMessage(MessageId).then((response) => {
            dispatch(confirmedDeleteMessageAction(MessageId));
            history.push('/Messages');
        });
    };
}

export function confirmedDeleteMessageAction(MessageId) {
    return {
        type: CONFIRMED_DELETE_MESSAGE_ACTION,
        payload: MessageId,
    };
}

export function createMessageAction(MessageData, history) {
    return (dispatch, getState) => {
        createMessage(MessageData).then((response) => {
            const singleMessage = {
                ...MessageData,
                id: response.data.name,
            };
            dispatch(confirmedCreateMessageAction(singleMessage));
            history.push('/Messages');
        });
    };
}

export function getMessagesAction() {
    return (dispatch, getState) => {
        getMessages().then((response) => {
            let Messages = formatMessages(response.data);
            dispatch(confirmedGetMessagesAction(Messages));
        });
    };
}

export function confirmedCreateMessageAction(singleMessage) {
    return {
        type: CONFIRMED_CREATE_MESSAGE_ACTION,
        payload: singleMessage,
    };
}

export function confirmedGetMessagesAction(Messages) {
    return {
        type: CONFIRMED_GET_MESSAGES,
        payload: Messages,
    };
}

export function confirmedUpdateMessageAction(Message) {
    return {
        type: CONFIRMED_EDIT_MESSAGE_ACTION,
        payload: Message,
    };
}

export function updateMessageAction(Message, history) {
    return (dispatch, getState) => {
        updateMessage(Message, Message.id).then((reponse) => {
            dispatch(confirmedUpdateMessageAction(Message));
            history.push('/Messages');
        });
    };
}
