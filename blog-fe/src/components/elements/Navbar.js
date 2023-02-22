/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const pages = ['/', '/about', '/contact'];

export default function Navbar() {
  return (
    <div className="nav">
      <div className="header-left">
        <a> The Artifact </a>
        <em> Culture & Art Blog </em>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <Link style={{ textDecoration: 'none' }} to={pages[0]}>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to={pages[1]}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to={pages[2]}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}