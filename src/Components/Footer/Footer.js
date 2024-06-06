import React, { useState } from 'react'
import { AiFillCustomerService } from "react-icons/ai";
import './Footer.css'
import payment from '../Assets/payment.webp'

function Footer() {
  const [toggle, setToggle] = useState(null)
  const [togglebtn, setTogglebtn] = useState(false)
  const handleToggleList = (e) => {
    setToggle(e);
    setTogglebtn(toggle === e ? !togglebtn : true)
  }
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className={toggle === 1 &&  togglebtn? 'footer-link toggle-list active' : 'footer-link toggle-list' }>
              <div className="toggle-list-icon d-flex justify-content-between align-items-center">
                <h5 style={{margin: 0}}>Quick Links</h5>
                <b style={{fontSize: '1.5rem'}} onClick={(e)=>handleToggleList(1)} className='plus-sign'>+</b>
              </div>
              <ul className='mt-4'>
                <li><a href="">About Us</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Press Releases</a></li>
                <li><a href="">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <hr />
            <div className={togglebtn && toggle === 2 ? 'store-details toggle-list active' : 'store-details toggle-list' }>
            <div className="toggle-list-icon d-flex justify-content-between align-items-center">
                <h5 style={{margin: 0}}>Store Details</h5>
                <b style={{fontSize: '1.5rem'}} onClick={()=>handleToggleList(2)} className='plus-sign'>+</b>
            </div>
             <div className="d-flex align-items-center mt-4">
                <div className="customer">
                  <AiFillCustomerService />
                </div>
                <div className="call-details mx-2">
                  <p>Need any Help?</p>
                  <p className='call'>88473-89488</p>
                </div>
              </div>
            <ul>
              <li></li>
              <li><b>Address</b>: 502 New Design str</li>
              <li><b>Australia</b></li>
              <li><b>Email</b>: kuljitsingh9488@gmail.com</li>
            </ul>
            </div>  
          </div>
          <div className="col-md-4">
            <hr />
            <div className={togglebtn && toggle === 3 ? 'news toggle-list active' : 'news toggle-list' }>
            <div className="toggle-list-icon d-flex justify-content-between align-items-center">
                <h5 style={{margin: 0}}>Newsletter</h5>
                <b style={{fontSize: '1.5rem'}} onClick={(e)=>handleToggleList(3)} className='plus-sign'>+</b>
              </div>
            <p className='mt-4'><small>Sign up for our mailing list to get lates updates and offers.</small></p>
            <form action="">
              <div className="d-flex mt-4">
                <input type="text" placeholder='Enter your email...' />
                <button className='btn btn-dark mx-2'>Subscribe</button>
              </div>
            </form>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-md-between justify-content-center pt-5">
          <div className="col-md-6 d-flex justify-content-md-between justify-content-center">
              <img src={payment} alt="" />
          </div>
          <div className="col-md-6 text-md-end text-center">
          <p>Copyright © Alukas all rights reserved. Powered by Bersky.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
