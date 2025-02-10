import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Style from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faTags, faLayerGroup, faCaretDown, faShoppingCart,faHeart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './../../Context/UserContext';
import { CartContext } from './../../Context/CartContext';
import {  scroller } from 'react-scroll';
import logo from '../../Assets/images/logoo.png'

export default function Navbar() {
  let { userToken, setUserToken } = useContext(UserContext);
  let { cartItemsCount } = useContext(CartContext);
  let navigate = useNavigate();
  let location = useLocation();

  function logOut() {
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/login');
  }

  function handleScrollToSection(section) {
    if (location.pathname !== '/') {
      navigate('/');
      // Delay scrolling until the navigation completes
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
        });
      }, 100); // Adjust the delay if necessary
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }
  }

  return (
    <nav className="navbar">
     <div className="logo">
         {userToken && (
        <Link to="/">
          <img src={logo} alt="Shopsphere Logo" className={Style.logo} />
        </Link>
        )}
     </div>

      <div className="nav-links">
        {userToken && (
          <>
            <Link className="nav-link" to="/">Home</Link>

            {/* Products Dropdown */}
            <div className={Style.dropdown}>
              <span className={Style['dropdown-toggle']}>
                Products
                <FontAwesomeIcon icon={faCaretDown} className={Style['dropdown-icon']} />
              </span>

              {/* Dropdown Menu */}
              <div className={Style['dropdown-menu']}>
                <Link className={Style['dropdown-item']} to="/Productcom">
                  <FontAwesomeIcon icon={faTshirt} className={Style['menu-icon']} /> Products
                </Link>
                <Link className={Style['dropdown-item']} to="/Brands">
                  <FontAwesomeIcon icon={faTags} className={Style['menu-icon']} /> Brands
                </Link>
                <Link className={Style['dropdown-item']} to="/Categories">
                  <FontAwesomeIcon icon={faLayerGroup} className={Style['menu-icon']} /> Categories
                </Link>
              </div>
            </div>

            {/* Updated to handle scrolling */}
            <Link className="nav-link" to="/New">New</Link>

            <button className="nav-link" onClick={() => handleScrollToSection('faq')}>FAQ</button>
            <button className="nav-link" onClick={() => handleScrollToSection('about-us')}>About Us</button>
            <Link className="nav-link" to="/ContactUs">ContactUs</Link>

           
          </>
        )}
      </div>

      <div className="nav-actions">
  <div className="social-icons d-flex me-3">
    <a href="https://facebook.com" className="text-main me-3">
      <i className="bi bi-facebook"></i>
    </a>

    <a href="https://instagram.com" className="text-main me-3">
      <i className="bi bi-instagram"></i>
    </a>
  
    <a href="https://youtube.com" className="text-main me-3">
      <i className="bi bi-youtube"></i>
    </a>
    <a href="https://pinterest.com" className="text-main me-3">
      <i className="bi bi-pinterest"></i>
    </a>
 
</div>


        {userToken ? (
          <>
                 <Link className="nav-link text-main" to="/wishlist">
                           <FontAwesomeIcon icon={faHeart} />
                   </Link>
            <button className="btn  mx-2" onClick={() => navigate('/Cart')}>
              <FontAwesomeIcon icon={faShoppingCart} className='text-main' />
              {cartItemsCount > 0 && <span className="badge bg-main">{cartItemsCount}</span>}
            </button>
            <button className="btn3 btn-danger mx-2" onClick={logOut}>Logout</button>
          </>
        ) : (
          <>
            <button className="btn3 mx-2" onClick={() => navigate('/Login')}>Login</button>
            <span className="text-dark">|</span>
            <button className="btn3 mx-2" onClick={() => navigate('/Register')}>SignUp</button>
          </>
        )}
      </div>
    </nav>
  );
}
