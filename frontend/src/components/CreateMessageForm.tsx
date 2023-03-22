import { Form, useNavigate, useNavigation, useActionData } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';

function CreateMessageForm({ method }) {
  const data: any = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const [title, setTitle] = useState('');

  //Need to change this once login is implemented
  const [author, setAuthor] = useState('tempacct');
  
  const [content, setContent] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState(false);

  const createMessage = useMutation(
      (formData) => axios.post('http://localhost:5000/api/message', formData),
      {
            onSuccess: () => {
              console.log('Message created successfully.');
              setStatus('Message created successfully.');
              setSuccess(true);
            },
            onError: () => {
              console.log('An error occurred. Message could not be saved.');
              setStatus('An error occurred. Message could not be saved.');
            }
      }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    createMessage.mutate();
  };

  function cancelHandler() {
    navigate('..');
  }

  return (
    <>
      <p>{status}</p>
      {
        !success &&
        <Form method={method} onSubmit={handleSubmit}>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err: any) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
          <p>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              rows={5}
              required
              onChange={(e) => setContent(e.target.value)}
            />
          </p>
          <div>
            <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
              Cancel
            </button>
            <button disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Save'}
            </button>
          </div>
        </Form>
      }
    </>
  );
}

export default CreateMessageForm;