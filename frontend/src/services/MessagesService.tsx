import axiosInstance from '../services/AxiosInstance';

export function getMessages() {
    return axiosInstance.get(`messages.json`);
}

export function createMessage(messageData) {
    return axiosInstance['message(`messages.json`, messageData)'];
}

export function updateMessage(message, messageId) {
    return axiosInstance.put(`messages/${messageId}.json`, message);
}

export function deleteMessage(messageId) {
    return axiosInstance.delete(`messages/${messageId}.json`);
}

export function formatMessages(messagesData) {
    let messages = [];
    for (let key in messagesData) {
        messages.push({ ...messagesData[key], id: key });
    }

    return messages;
}
