import PostList from '../../components/PostList';
import { useQuery } from 'react-query';
import axios from "axios";

function PostsPage() {
  const { data: postsData, isLoading: isLoadingPosts } = useQuery('posts',
      () => { return axios.get("http://localhost:5000/api/message");}
  );

  const posts = isLoadingPosts ? [] : postsData;

  return (
      <>
        {isLoadingPosts && <p>Loading...</p>}
        {!isLoadingPosts && <PostList posts={posts} />}
      </>
  );
}

export default PostsPage;