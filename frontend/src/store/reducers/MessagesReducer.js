import {
    CONFIRMED_CREATE_message_ACTION,
    CONFIRMED_DELETE_message_ACTION,
    CONFIRMED_EDIT_message_ACTION,
    CONFIRMED_GET_messageS,
    CREATE_message_ACTION,
} from '../actions/messageTypes';

const initialState = {
    messages: [],
};

export default function messagesReducer(state = initialState, actions) {
    if (actions.type === CREATE_message_ACTION) {
        const message = {
            id: Math.random(),
            title: 'message Title 2asdasd',
            description: 'Sample Description 2asdasdas',
        };

        const messages = [...state.messages];
        messages.push(message);
        return {
            ...state,
            messages,
        };
    }

    if (actions.type === CONFIRMED_DELETE_message_ACTION) {
        const messages = [...state.messages];
        const messageIndex = messages.findIndex(
            (message) => message.id === actions.payload,
        );

        messages.splice(messageIndex, 1);

        return {
            ...state,
            messages,
        };
    }

    if (actions.type === CONFIRMED_EDIT_message_ACTION) {
        const messages = [...state.messages];
        const messageIndex = messages.findIndex(
            (message) => message.id === actions.payload.id,
        );

        messages[messageIndex] = actions.payload;
        return {
            ...state,
            messages,
        };
    }

    if (actions.type === CONFIRMED_CREATE_message_ACTION) {
        const messages = [...state.messages];
        messages.push(actions.payload);

        return {
            ...state,
            messages,
        };
    }

    if (actions.type === CONFIRMED_GET_messageS) {
        return {
            ...state,
            messages: actions.payload,
        };
    }
    return state;
}
