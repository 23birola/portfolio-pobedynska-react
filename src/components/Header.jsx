import { Link } from 'react-router-dom';
import React from 'react';

export default function Navigation() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <Link to="https://github.com/23birola" className="navbar-brand">
      <img src='./images/logo.png' alt="logo" />
    </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse nav-wrapper" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/work">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About me</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts">Contact me</Link>
              </li>
          <li className="nav-item">
            <Link to="https://drive.google.com/file/d/1kXZ5krq-IVlFWTqyKVvMwkg3zgyz5H_l/view?usp=drive_link">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
      </nav>
  </>
  );
}