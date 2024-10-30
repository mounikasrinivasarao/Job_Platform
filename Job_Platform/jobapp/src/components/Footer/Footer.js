import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import specific social media icons

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h3>Explore</h3>
        <ul>
          <li><a href="https://careersidekick.com/job-search-tips/">Job Search Tips</a></li>
          <li><a href="https://www.cpresumes.com/?source=bing&medium=cpc&msclkid=81cd123e68a4182c2efd77616fb8f9b9">Resume Writing Resources</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div>
      <div className="footer-content">
        <h3>Contact</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
      <div className="footer-content">
        <h3>Follow us</h3>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
