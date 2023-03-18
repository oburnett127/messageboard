import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { updateMessageAction } from '../../store/actions/MessageActions';
import { getMessage } from '../../store/selectors/MessageSelectors';

function EditMessage(props) {
    const [message, setMessage] = useState(props.message);

    const dispatch = useDispatch();

    useEffect(() => {
        setMessage(props.message);
    }, [props.message]);

    function onUpdateMessage(e) {
        e.preventDefault();
        dispatch(updateMessageAction(message, props.history));
    }

    return (
        <div>
            <div>Edit Message</div>
            <div>
                <form onSubmit={onUpdateMessage}>
                    <div className='my-2'>
                        <label>Title</label>
                        <div>
                            <input type='text' className='border border-gray-500 p-1 w-full' value={message.title}
                                onChange={(e) =>
                                    setMessage({
                                        ...message,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className='my-2'>
                        <label>Description</label>
                        <div>
                            <textarea className='border border-gray-500 p-1 w-full' value={message.description}
                                onChange={(e) =>
                                    setMessage({
                                        ...message,
                                        description: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </div>

                    <div>
                        <button type='submit' className='bg-red-500 text-white px-3 py-2'
                        >
                            Edit Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const makeStateToProps = () => {
    const message = getMessage();
    return (state, props) => {
        return {
            message: message(state, props.match.params.id),
        };
    };
};

export default connect(makeStateToProps)(EditMessage);
