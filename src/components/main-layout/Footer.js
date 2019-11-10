import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-12">
            <span className="copyright-note">
              All rights reserved
            </span>
          </div>
          <div className="col-md-10 col-sm-12">
            <nav className="footer-nav">
              <Link className="footer-nav-link" to="/">Home</Link>
              <Link className="footer-nav-link" to="/faq">FAQ</Link>
              <Link className="footer-nav-link" to="/terms">Terms</Link>
              <Link className="footer-nav-link" to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};