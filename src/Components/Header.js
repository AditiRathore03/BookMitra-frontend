import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AuthContext } from '../Context/AuthContext';

function Header() {
  const [menutoggle, setMenutoggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const dropdownRef = useRef(null);

  const Toggle = () => setMenutoggle(!menutoggle);
  const closeMenu = () => setMenutoggle(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    setDropdownOpen(false);
    closeMenu();
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="header">
      <div className="logo-nav">
        <Link to='/'>BOOKMITRA</Link>
      </div>

      <div className='nav-right'>
        <ul className={menutoggle ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMenu}>
            <Link to='/'>Home</Link>
          </li>
          <li className="option" onClick={closeMenu}>
          <a href="https://collaborative-recommendation-model-by-adarsh.streamlit.app/" target="_blank" rel="noopener noreferrer">Recommend</a>
  </li>
          <li className="option" onClick={closeMenu}>
            <Link to='/books'>Books</Link>
          </li>
          <li className="option" onClick={closeMenu}>
            <Link to='/aboutus'>Aboutus</Link>
          </li>

          {user ? (
            <li className="option profile-option" ref={dropdownRef}>
              <div className="profile-container" onClick={toggleDropdown}>
                <AccountCircleIcon style={{ fontSize: 30, cursor: 'pointer' }} />
                {dropdownOpen && (
                  <div className="profile-dropdown">
                    <Link 
                      to={user.isAdmin ? '/dashboard@admin' : '/dashboard@member'} 
                      onClick={() => { closeMenu(); setDropdownOpen(false); }}
                    >
                      Dashboard
                    </Link>
                    <div onClick={handleLogout} className="dropdown-logout">Logout</div>
                  </div>
                )}
              </div>
            </li>
          ) : (
            <li className="option" onClick={closeMenu}>
              <Link to='/signin'>Sign In</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="mobile-menu" onClick={Toggle}>
        {menutoggle ? (
          <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
        ) : (
          <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
        )}
      </div>
    </div>
  );
}

export default Header;
