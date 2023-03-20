import { v4 as uuidv4 } from 'uuid';

function MessageList({messages}) {

    //console.log(messages);

    return (
            <div>
                <ul>
                    {messages.map((message) => (
                        <li key={uuidv4()}>
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