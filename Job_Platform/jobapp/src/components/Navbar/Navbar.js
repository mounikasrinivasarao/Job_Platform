import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar({ toggleSidebar, isSidebarOpen }) {
  const [searchQuery, setSearchQuery] = useState('');
  const cardsRef = useRef(null);

  useEffect(() => {
    const cardsSection = document.getElementById('cards-section');
    if (cardsSection) {
      cardsRef.current = cardsSection.getBoundingClientRect().bottom;
    }
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSidebarNameClick = () => {
    const sidebarSection = document.getElementById('sidebar');
    if (sidebarSection) {
      sidebarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const scrollPosition = sectionTop - cardsRef.current;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  };

  const handleButtonClick = () => {
    handleScrollToSection('SaveJobTable'); // Replace 'your-section-id' with the actual ID of the section you want to scroll to
  };

  return (
    <nav className="navbar-container">
      <div className="sidebar-icon" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <>
            <FontAwesomeIcon icon={faArrowLeft} />
            <FontAwesomeIcon icon={faBars} className="menu-icon" />
          </>
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <div className="user-info">
        <span onClick={() => handleScrollToSection('welcome-section')}>WorkWiseWay</span>
        {/* Decrease the size of the image using CSS */}
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.Cb_l8fULcPw5C6yl12TYigHaGt&pid=Api&P=0&h=220"
          alt="User avatar"
          style={{ width: '70px', height: 'auto' }} // Adjust width as needed while maintaining aspect ratio
        />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      
    </nav>
  );
}

export default Navbar;
