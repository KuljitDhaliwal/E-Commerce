import React, { useState } from 'react'
import './Navbar.css';
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar } from '../Redux/Slices/CartSlice'


function Navbar() {

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


  const iconStyles = {
    fontSize: '25px',
    fontWeight: '100',
    color: 'black'
  }

  window.addEventListener('scroll', changeColor);
  return (
    <div>
      <nav class={navColor ? 'navbar navbar-expand-lg fixed-top navbar-color-scroll shadow' : 'navbar navbar-expand-lg fixed-top navbar-color' }>
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" to={'/'}>ALUKAS & CO.</Link>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ALUKAS & CO.</h5>
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
            <CiSearch style={iconStyles} />
            <CiUser style={iconStyles}/>
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



      {/* <nav  av className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex flex-column-reverse flex-column">
          <a className="navbar-brand" href="#">ALUKAS & CO.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{flexGrow: "0"}}>
            <ul className="navbar-nav gap-3 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-logos d-flex gap-4">
            <CiSearch style={iconStyles} />
            <CiUser style={iconStyles}/>
            <Link to={'/wishlist'} className='position-relative'>
              <CiHeart style={iconStyles} />
              <span class={wishlistedProducts.length <=0 ? "d-none" : "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"}>{wishlistedProducts.length}</span>
            </Link>
            <div className='position-relative' style={{cursor: 'pointer'}} onClick={()=> dispatch(openSidebar())}><CiShoppingCart style={iconStyles} />
              <span class={ cart.length <=0 ? "d-none" : "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"}>{cart.length}</span>
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  )
}

export default Navbar
