import React, { useState } from 'react'
import './Navbar.css';
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar } from '../../Redux/Slices/CartSlice'
import { useNavigate } from 'react-router-dom';

function Navbar({handleClick, setLogin}) {

  const { wishlistedProducts } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [navColor, setNavColor] = useState(false)

  const changeColor = () => {    
    if (window.scrollY >= 40) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const handleLogin = () => {
    if (loggedIn) {
      navigate('/login');
    } else {
      setLogin(true);
    }
  }


  const iconStyles = {
    fontSize: '25px',
    fontWeight: '100',
    color: 'black',
    cursor: 'pointer'
  }

  window.addEventListener('scroll', changeColor);
  return (
    <div>
      <nav class={navColor ? 'navbar navbar-expand-lg fixed-top navbar-color-scroll shadow' : 'navbar navbar-expand-lg fixed-top navbar-color' }>
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" to={'/'}>FINE & CO.</Link>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">FINE & CO.</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className='nav-link active' aria-current="page" to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-logos d-flex gap-4">
            <CiSearch style={iconStyles} onClick={handleClick}/>
            <CiUser style={iconStyles} onClick={handleLogin}/>
            <Link to={'/wishlist'} className='position-relative'>
              <CiHeart style={iconStyles} />
              <span class={wishlistedProducts.length <=0 ? "d-none" : "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"}>{wishlistedProducts.length}</span>
            </Link>
            <div className='position-relative' style={{cursor: 'pointer'}} onClick={()=> dispatch(openSidebar())}><CiShoppingCart style={iconStyles} />
              <span class={ cart.length <=0 ? "d-none" : "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"}>{cart.length}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
