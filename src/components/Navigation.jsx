import { Link } from 'react-router-dom';
// import './Navigation.css'


export default function Navigation() {
  return (
    <>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse nav-wrapper" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/work">Work</Link>
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
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </>
  );
}