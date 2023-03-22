import { NavLink } from 'react-router-dom';
import React from 'react';

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/messages">Messages</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
