import React, { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const MessageDeleteForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [messageDeleted, setMessageDeleted] = useState(false);
    const [prompt, setPrompt] = useState("Are you sure you want to delete this message?");

    console.log(id);

    const deleteMessage = useMutation(
        async () => {
            await axios.delete(`http://localhost:5000/api/message/${id}`);
        },
        {
            onSuccess: () => {
                console.log("Message was deleted.");
                setPrompt("The message was successfully deleted.");
                setMessageDeleted(true);
            },
            onError: (error) => {
                console.log("Error! The message could not be deleted.");
                setPrompt("Error! The message could not be deleted.");
            },
        }
    );

    const handleDelete = (e) => {
        e.preventDefault();
        deleteMessage.mutate();
    };

    const handleCancel = () => {
        navigate('..');
    }

    return (
        <>
            <p>{prompt}</p>
            { !messageDeleted &&
                <>
                    <button onClick={handleDelete}>Yes</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            }

        </>
    );
};

export default MessageDeleteForm;
