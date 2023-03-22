import { connect } from 'react-redux';
import { getMessage } from '../store/selectors/MessageSelectors';
import SingleMessageForm from '../components/SingleMessageForm';
import React from 'react';

function SingleMessagePage() {
    return (
        <SingleMessageForm />
    );
}

// const makeStateToProps = () => {
//     const post = getPost();
//     return (state, props) => {
//         return {
//             post: post(state, props.match.params.id),
//         };
//     };
// };

//export default connect(makeStateToProps)(SinglePost);

export default SingleMessagePage;