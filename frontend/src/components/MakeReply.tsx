import React from 'react';

function MakeReply() {
    const handleSubmit = (e) => {
        e.preventDefault();

        //Todo: call axios method to perform the update/post

    }

    return (
        <>
            <textarea name="reply" id="reply" placeholder="Type your reply here"></textarea>
            <button onClick={handleSubmit}>Reply</button>
        </>
    );


}

export default MakeReply;