import { useRouteError } from 'react-router-dom';
import React from 'react';

function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred';

  let message;

  if(error) {
    message = error['data'].message ? error['data'].message : "Something went wrong";
  } else {
    message = "Something went wrong"
  }

  return (
    <p>{message}</p>
  );
}

export default ErrorPage;