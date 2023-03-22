import { Outlet } from 'react-router-dom';

import MessagesNavigation from '../components/MessagesNavigation';

function MessageRootLayout() {
  return (
    <>
      <MessagesNavigation />
      <Outlet />
    </>
  );
}

export default MessageRootLayout;
