import { Link, NavLink } from 'react-router-dom';
import React from 'react';

export default function Navigation() {
  return (
    <>
      <nav className="bg-[#E9E9E9] border-b border-gray-200">
  <div className="container mx-auto px-4 flex items-center justify-between">
    <button
      className="md:hidden text-gray-500 focus:outline-none"
      type="button"
      aria-label="Toggle navigation"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>
    <div className="hidden md:flex space-x-7 ml-auto">
      <ul className="flex space-x-6 text-xl mt-5" style={{ fontFamily: 'Satisfy' }}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-500 ${isActive ? 'font-bold text-blue-500' : ''}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-500 ${isActive ? 'font-bold text-blue-500' : ''}`
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `text-gray-700 hover:text-blue-500 ${isActive ? 'font-bold text-blue-500' : ''}`
            }
          >
            Contact me
          </NavLink>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1BK8SgnWA4U_hEHC_H_VwCcngRqfUfimw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}


/*import { Link, NavLink } from 'react-router-dom';
import React from 'react';

export default function Navigation() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse nav-wrapper" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/home">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/work">Projects</NavLink>
          </li>
         <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/contacts">Contact me</NavLink>
              </li>
          <li className="nav-item">
            <NavLink to="https://drive.google.com/file/d/1BK8SgnWA4U_hEHC_H_VwCcngRqfUfimw/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</NavLink>
          </li>
        </ul>
      </div>
    </div>
      </nav>
  </>
  );
}
  */
