import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function SingleMessageForm() {
    const { id } = useParams();

    const { isLoading, error, data: messageData } = useQuery('singleMessage', 
        () => axios('http://localhost:5000/api/message/5').then((res) => res.data)
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
}

export default SingleMessageForm;