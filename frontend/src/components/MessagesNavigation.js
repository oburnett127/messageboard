import { NavLink } from 'react-router-dom';

function MessagesNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/messages"
              end
            >
              All Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages/new"
              end
            >
              New Message
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MessagesNavigation;
