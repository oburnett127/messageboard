import { connect } from 'react-redux';
import { getPost } from '../../store/selectors/PostSelectors';

function SinglePost(props) {
    return (
        <div>
            <div>{props.post.title}</div>
            <div>{props.post.description}</div>
        </div>
    );
}

const makeStateToProps = () => {
    const post = getPost();
    return (state, props) => {
        return {
            post: post(state, props.match.params.id),
        };
    };
};

export default connect(makeStateToProps)(SinglePost);
