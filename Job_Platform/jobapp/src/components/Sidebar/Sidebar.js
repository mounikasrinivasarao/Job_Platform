import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Sidebar({ isSidebarOpen, closeSidebar }) {
  return (
    <aside className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
      <div className="sidebar-header">
        {isSidebarOpen && (
          <div className="back-icon" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        )}
      </div>
      <ul className="sidebar-list">
        <li>
          {/* Link to navigate to the 'Job Search Tips' section */}
          <a href="cards" onClick={closeSidebar}>
            Job Search
          </a>
        </li>
        <li>
          {/* Link to navigate to the 'Resume Writing Resources' section */}
          <a href="#table" onClick={closeSidebar}>
            Top Companies
          </a>
        </li>
        <li>
          {/* Link to navigate to the 'Support' section */}
          <a href="#JobCards" onClick={closeSidebar}>
            Job Categories
          </a>
        </li>
        <li>
          {/* Link to navigate to the 'Support' section */}
          <a href="#resumebuilder" onClick={closeSidebar}>
            Resume Builder
          </a>
        </li>
        {/* Add more links for other sections as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;
