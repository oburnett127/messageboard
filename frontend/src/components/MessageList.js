
function MessageList({messages}) {

    // let messages = [];
    // messages.push({id:1, title:"Message num 1", author:"snowstorm948", content:"This is the content for message 1. I am writing content. I am writing more and more until I can't possibly type anymore."});
    // messages.push({id:2, title:"Message num 2", author:"successmessageer351", content:"This is the content for message 2. I am writing content. I am writing more and more until I can't possibly type anymore."});
    // messages.push({id:3, title:"Message num 3", author:"mountainclimber172", content:"This is the content for message 3. I am writing content. I am writing more and more until I can't possibly type anymore."});
    // messages.push({id:4, title:"Message num 4", author:"wavesurfer899", content:"This is the content for message 4. I am writing content. I am writing more and more until I can't possibly type anymore."});

    console.log(messages);

    return (
            <div>
                <ul>
                    {messages.map((message) => (
                        <li key={message.id}>
                                <div>
                                    {/* <h2>{message.title}</h2> */}
                                    <h2>{message.author}</h2>
                                    <h2>{message.timestamp}</h2>
                                    <p>{message.content}</p>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
}

export default MessageList;