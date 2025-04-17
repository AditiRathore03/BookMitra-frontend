// import { React, useState } from 'react'
// import { Link } from 'react-router-dom'
// import './Header.css'

// import MenuIcon from '@material-ui/icons/Menu';
// import ClearIcon from '@material-ui/icons/Clear';

// function Header() {
//   const [menutoggle, setMenutoggle] = useState(false)

//   const Toggle = () => setMenutoggle(!menutoggle)
//   const closeMenu = () => setMenutoggle(false)

//   return (
//     <div className="header">
//       <div className="logo-nav">
//         <Link to='/'>
//           BOOKMITRA
//         </Link>
//       </div>

//       <div className='nav-right'>
//         {/* <input className='search-input' type='text' placeholder='Search a Book' /> */}
//         <ul className={menutoggle ? "nav-options active" : "nav-options"}>
//           <li className="option" onClick={closeMenu}>
//             <Link to='/'>Home</Link>
//           </li>
//           <li className="option" onClick={closeMenu}>
//             <Link to='/books'>Books</Link>
//           </li>
//           <li className="option" onClick={closeMenu}>
//             <Link to='/aboutus'>Aboutus</Link>
//           </li>
//           <li className="option" onClick={closeMenu}>
//             <Link to='/signin'>Sign In</Link>
//           </li>
//         </ul>
//       </div>

//       <div className="mobile-menu" onClick={Toggle}>
//         {menutoggle ? (
//           <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
//         ) : (
//           <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
//         )}
//       </div>
//     </div>
//   )
// }

// export default Header


import { React, useState, useContext } from 'react';
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

  const Toggle = () => setMenutoggle(!menutoggle);
  const closeMenu = () => setMenutoggle(false);
  
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    // Dispatch logout action
    dispatch({ type: "LOGOUT" });
    // Remove user from localStorage (as in your original logout function)
    localStorage.removeItem("user");
    // Close dropdown
    setDropdownOpen(false);
    // Close menu if mobile
    closeMenu();
  };

  return (
    <div className="header">
      <div className="logo-nav">
        <Link to='/'>
          BOOKMITRA
        </Link>
      </div>

      <div className='nav-right'>
        <ul className={menutoggle ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMenu}>
            <Link to='/'>Home</Link>
          </li>
          <li className="option" onClick={closeMenu}>
            <Link to='/books'>Books</Link>
          </li>
          <li className="option" onClick={closeMenu}>
            <Link to='/aboutus'>Aboutus</Link>
          </li>
          
          {user ? (
            <li className="option profile-option">
              <div className="profile-container" onClick={toggleDropdown}>
                <AccountCircleIcon style={{ fontSize: 30 }} />
                {dropdownOpen && (
                  <div className="profile-dropdown">
                    <Link to='/dashboard@member' onClick={closeMenu}>Dashboard</Link>
                    
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