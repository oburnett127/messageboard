import { NavLink } from 'react-router-dom';

function MessagesNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/messages">All Messages</a>
          </li>
          <li>
            <a href="/messages/new">New Message</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MessagesNavigation;
