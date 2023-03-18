import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { updateMessageAction } from '../store/actions/MessageActions';
import { getMessage } from '../store/selectors/MessageSelectors';
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

function EditMessageForm(props) {
    const queryClient = useQueryClient();
    const [title, setTitle] = useState(message.title);
    const [content, setContent] = useState(message.content);

    const { mutate, isLoading } = useMutation(
        (updatedMessage) => axios.post(`http://localhost:5000/api/message/update/${message.id}`, updatedMessage),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("messages");
            },
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ content });
    };

    const [message, setMessage] = useState(props.message);

    //const dispatch = useDispatch();

    useEffect(() => {
        setMessage(props.message);
    }, [props.message]);

    function onEditMessage(e) {
        e.preventDefault();
       
        //dispatch(updateMessageAction(message, props.history));
    }

    return (
        <div>
            <div>Edit Message</div>
            <div>
                <form onSubmit={onEditMessage}>
                    <div>
                        <label>Title</label>
                        {/* <div>
                            <input type='text' value={message.title}
                                onChange={(e) =>
                                    setMessage({
                                        ...message,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div> */}
                    </div>

                    <div>
                        <label>Content</label>
                        <div>
                            <textarea value={message.content}
                                onChange={(e) =>
                                    setMessage({
                                        ...message,
                                        content: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </div>

                    <div>
                        <button type='submit'>
                            Edit Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// const makeStateToProps = () => {
//     const message = getMessage();
//     return (state, props) => {
//         return {
//             message: message(state, props.match.params.id),
//         };
//     };
// };

//export default connect(makeStateToProps)(EditMessageForm);

export default EditMessageForm;
