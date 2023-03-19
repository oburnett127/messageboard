import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { updateMessageAction } from '../store/actions/MessageActions';
import { getMessage } from '../store/selectors/MessageSelectors';
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditMessageForm(props) {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const [content, setContent] = useState('');

    const { mutate, isLoading } = useMutation(
        (updatedMessage) => axios.put(`http://localhost:5000/api/message/${id}`, updatedMessage),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("messages");
            },
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ content });
        
        //const dispatch = useDispatch();
        //dispatch(updateMessageAction(message, props.history));

    };

    return (
        <div>
            <div>Edit Message</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* <label>Title</label>
                         <div>
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
                            <textarea
                                onChange={(e) =>
                                    setContent(e.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>

                    <div>
                        <button type='submit'>Save Changes</button>
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
