import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav">
      <div className="header-left">
        <a> The Artifact </a>
        <em> Culture & Art Blog </em>
      </div>
      <div className="header-right">
        <ul>
          <li><a href="index.html">Blog</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}