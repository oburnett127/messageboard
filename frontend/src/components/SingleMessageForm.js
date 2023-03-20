import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import MakeReply from './MakeReply'

function SingleMessageForm() {
  const { id } = useParams();

  const { isLoading, error, data: result } = useQuery('singleMessage', 
    () => axios.get(`http://localhost:5000/api/message/${id}`));

  // console.log("id is: " + id);
  // console.log(result);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }

  const messageData = result.data.message;

  return (
    <div>
      <p>{messageData.author}</p>
      <time>{messageData.timestamp}</time>
      <p>{messageData.content}</p>
      <MakeReply />
    </div>
  );
}

export default SingleMessageForm;