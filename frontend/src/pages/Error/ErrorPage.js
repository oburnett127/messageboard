import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred';
  let message = 'Something went wrong';

  message = error.data.message;

  return (
    <p>{message}</p>
  );
}

export default ErrorPage;