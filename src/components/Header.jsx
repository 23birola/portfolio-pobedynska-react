import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#E9E9E9] border-b-2 border-dotted border-gray-700">
      <div className="container mx-auto px-4 flex items-center justify-between">
      
        {/* Кнопка для відкриття меню */}
        <button
          className="md:hidden text-gray-500 focus:outline-none ml-auto"
          onClick={toggleMenu}
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

        {/* Навігація для десктопів */}
        <div className="hidden md:flex space-x-7 ml-auto">
          <ul className="flex space-x-6 text-xl pt-3" style={{ fontFamily: 'Satisfy' }}>
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
                Contacts
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

      {/* Мобільне меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#E9E9E9] border-t border-gray-200">
          <ul className="grid grid-cols-4 gap-4 p-4 text-lg w-full" style={{ fontFamily: 'Satisfy' }}>
  <li className="col-span-1">
    <NavLink
      to="/home"
      className={({ isActive }) =>
        `block text-center w-full py-2 text-gray-700 hover:text-blue-500 ${
          isActive ? 'font-bold text-blue-500' : ''
        }`
      }
    >
      About
    </NavLink>
  </li>
  <li className="col-span-1">
    <NavLink
      to="/work"
      className={({ isActive }) =>
        `block text-center w-full py-2 text-gray-700 hover:text-blue-500 ${
          isActive ? 'font-bold text-blue-500' : ''
        }`
      }
    >
      Projects
    </NavLink>
  </li>
  <li className="col-span-1">
    <NavLink
      to="/contacts"
      className={({ isActive }) =>
        `block text-center w-full py-2 text-gray-700 hover:text-blue-500 ${
          isActive ? 'font-bold text-blue-500' : ''
        }`
      }
    >
      Contacts
    </NavLink>
  </li>
  <li className="col-span-1">
    <a
      href="https://drive.google.com/file/d/1BK8SgnWA4U_hEHC_H_VwCcngRqfUfimw/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center w-full py-2 text-gray-700 hover:text-blue-500"
    >
      Resume
    </a>
  </li>
</ul>

        </div>
      )}
    </nav>
  );
}
