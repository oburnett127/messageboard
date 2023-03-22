import MessageList from '../components/MessageList';
import { useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';

function MessagesPage() {
  
    const { data: messagesData, isLoading: isLoadingMessages } = useQuery('messages',
        () => axios.get("http://localhost:5000/api/message")
        .then(response => response.data.messages)
        .catch((error)=>console.log(error)));

    console.log(messagesData);
    const messages = isLoadingMessages ? [] : messagesData;

    return (
        <>

          {isLoadingMessages && <p>Loading...</p>}
          {!isLoadingMessages && <MessageList messages={messages} /> }
        </>
    );
}

export default MessagesPage;